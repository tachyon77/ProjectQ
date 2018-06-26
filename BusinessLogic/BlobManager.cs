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

        async Task<string> IBlobManager.AddAsync(string container, string blobName, Stream blobStream)
        {
            var blobContainer = _blobClientProvider.BlobClient.GetContainerReference(container);
            string uniqueBlobName = blobName + "_" + Guid.NewGuid().ToString();
            var blockBlob = blobContainer.GetBlockBlobReference(uniqueBlobName);
            blobStream.Seek(0, SeekOrigin.Begin);
            await blockBlob.UploadFromStreamAsync(blobStream);
            return uniqueBlobName;
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
