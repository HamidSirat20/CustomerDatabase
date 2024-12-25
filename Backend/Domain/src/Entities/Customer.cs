namespace Domain.src.Entities;

public class Customer
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string MobileNumber { get; set; } = string.Empty;
    public string? Image { get; set; }
    public DateTime DateOfBirth { get; set; }
    public int AddressId { get; set; } // Foreign Key
    public Address Address { get; set; } = null!;
}
