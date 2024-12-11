using Domain.src.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebApi.src.DataContext;

public class CustomerDbContext : DbContext
{
    public DbSet<Customer> customers => Set<Customer>();
    public DbSet<Address> addresses => Set<Address>();

    public CustomerDbContext(DbContextOptions<CustomerDbContext> options)
    : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        optionsBuilder
        .UseSqlite($"Data Source={Path.Join(path, "customers.db")}")
        .UseSqlite($"Data Source ={Path.Join(path, "addresses.db")}");

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>()
        .HasOne(c => c.Address)
        .WithMany()
        .HasForeignKey(c => c.AddressId);
        SeedData.Seed(modelBuilder);
    }
}
