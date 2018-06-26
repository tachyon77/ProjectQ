using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;
using ProjectQ.BusinessLogic.Services;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace ProjectQ.BusinessLogic
{
    public class BlobManager : IBlobManager
    {
        #region Fields
        private readonly IBlobClientProvider _blobClientProvider;
        #endregion

        #region Cosntructors

        public BlobManager(IBlobClientProvider blobClientProvider)
        {
            _blobClientProvider = blobClientProvider;
        }

        #endregion

        #region Interface Implementations

        async Task<string> IBlobManager.AddAsync(string container, Stream blob)
        {
            var blobContainer = _blobClientProvider.BlobClient.GetContainerReference(container);
            string blobName = Guid.NewGuid().ToString();
            var blockBlob = blobContainer.GetBlockBlobReference(blobName);
            await blockBlob.UploadFromStreamAsync(blob);
            return blobName;
        }

        async Task<MemoryStream> IBlobManager.FindAsync(string container, string blobName)
        {
            var blobContainer = _blobClientProvider.BlobClient.GetContainerReference(container);
            var blockBlob = blobContainer.GetBlockBlobReference(blobName);

            var stream = new MemoryStream();
            await blockBlob.DownloadToStreamAsync(stream);
            return stream;
        }

        void IBlobManager.Remove(string container, string blobName)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
