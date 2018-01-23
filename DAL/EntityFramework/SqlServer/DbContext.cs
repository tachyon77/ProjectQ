using Microsoft.EntityFrameworkCore;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework.SqlServer
{
    public class DbContext : ProjectQEntities
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer("Data Source=DESKTOP-EC84EI0;Initial Catalog=ProjectQ;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=60;Encrypt=False;TrustServerCertificate=True");

            optionsBuilder.UseSqlServer(

                "Server=tcp:projectq-dbserver.database.windows.net,1433;Initial Catalog=ProjectQ;Persist Security Info=False;User ID=mahbub;Password=Zaqokm00;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
            );
        }
    }
}
