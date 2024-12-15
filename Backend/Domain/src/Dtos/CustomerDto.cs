using Domain.src.Entities;

namespace Domain.src.Dtos;

public record CustomerDto(int Id, string FirstName, string LastName, string Email, Address Address);

