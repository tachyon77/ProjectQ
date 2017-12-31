using Microsoft.EntityFrameworkCore;
using ProjectQ.Model;

/// <summary>
/// This class exists only to help the code generator wizards.
/// It should not be part of the build.
/// </summary>
namespace ProjectQ.Model
{
    public class ProjectQEntities : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-EC84EI0;Initial Catalog=ProjectQ;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=60;Encrypt=False;TrustServerCertificate=True");
        }
    }
}
