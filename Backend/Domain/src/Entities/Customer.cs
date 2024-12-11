namespace Domain.src.Entities;

public class Customer
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public int AddressId { get; set; } // Foreign Key
    public Address Address { get; set; } = null!;
}
