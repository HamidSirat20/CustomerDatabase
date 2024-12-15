using Domain.src.Entities;

namespace Domain.src.Common;

public class QueryParameters
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public Address Address { get; set; } = null!;
}
