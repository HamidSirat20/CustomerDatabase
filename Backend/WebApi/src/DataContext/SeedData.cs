using Domain.src.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebApi.src.DataContext;

public static class SeedData
{
    public static void Seed(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Address>().HasData(
            new Address { Id = 1, Street = "123 Elm Street", City = "Springfield", State = "IL", ZipCode = "62701", Country = "USA" },
            new Address { Id = 2, Street = "456 Oak Avenue", City = "Seattle", State = "WA", ZipCode = "98101", Country = "USA" },
            new Address { Id = 3, Street = "789 Pine Drive", City = "Austin", State = "TX", ZipCode = "73301", Country = "USA" }
        );

        modelBuilder.Entity<Customer>().HasData(
            new Customer { Id = 1, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", AddressId = 1 },
            new Customer { Id = 2, FirstName = "Jane", LastName = "Smith", Email = "jane.smith@example.com", AddressId = 2 },
            new Customer { Id = 3, FirstName = "Alice", LastName = "Brown", Email = "alice.brown@example.com", AddressId = 3 }
        );

    }
}