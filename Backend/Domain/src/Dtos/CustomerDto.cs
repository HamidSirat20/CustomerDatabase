using Domain.src.Entities;

namespace Domain.src.Dtos;

public class CustomerReadDto
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string MobileNumber { get; set; } = string.Empty;
    public string? Image { get; set; }
    public DateTime DateOfBirth { get; set; }
    public AddressReadDto Address { get; set; } = null!;
}

public class CustomerUpdateDto
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string MobileNumber { get; set; } = string.Empty;
    public string? Image { get; set; }
    public DateTime DateOfBirth { get; set; }
    public AddressUpdateDto Address { get; set; } = null!;
}

public class CustomerCreateDto
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string MobileNumber { get; set; } = string.Empty;
    public string? Image { get; set; }
    public DateTime DateOfBirth { get; set; }
    public AddressCreateDto Address { get; set; } = null!;
}