using Domain.src.Entities;

namespace Domain.src.Dtos;

public record ReadCustomerDto(int Id, string FirstName, string LastName, string Email, string MobileNumber, DateTime DateOfBirth, Address Address);
