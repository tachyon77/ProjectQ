using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectQ.BusinessLogic.Services
{
    public interface IBlobClientProvider
    {
        CloudBlobClient BlobClient { get; }
    }

    public class BlobClientProvider : IBlobClientProvider
    {
        private CloudBlobClient _blobClient;

        public BlobClientProvider(IConfiguration configuration)
        {
            CloudStorageAccount storageAccount = null;

            string storageConnectionString = configuration.GetConnectionString("AzureBlobStorage");

            // Check whether the connection string can be parsed.
            if (CloudStorageAccount.TryParse(storageConnectionString, out storageAccount))
            {
                try
                {
                    // Create the CloudBlobClient that represents the Blob storage endpoint for the storage account.
                    _blobClient = storageAccount.CreateCloudBlobClient();
                }
                catch
                {

                }
            }
                
        }

        CloudBlobClient IBlobClientProvider.BlobClient => _blobClient;

    }
}
