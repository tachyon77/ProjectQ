using Microsoft.EntityFrameworkCore;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework.SqlServer
{
    public class SqlServerDbContext : ProjectQEntities
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-EC84EI0;Initial Catalog=ProjectQ;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=60;Encrypt=False;TrustServerCertificate=True");
        }
    }
}
