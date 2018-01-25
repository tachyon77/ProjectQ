using Microsoft.EntityFrameworkCore;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework.SqlServer
{
    public class DbContext : ProjectQEntities
    {
        private string ConnectionString;
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
#if DEBUG
            ConnectionString = "Data Source=DESKTOP-EC84EI0;Initial Catalog=ProjectQ;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=60;Encrypt=False;TrustServerCertificate=True";
#else
            ConnectionString = "Server=tcp:projectq-dbserver.database.windows.net,1433;Initial Catalog=ProjectQ;Persist Security Info=False;User ID=mahbub;Password=Zaqokm00;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
#endif
            optionsBuilder.UseSqlServer(ConnectionString);
        }
    }
}
