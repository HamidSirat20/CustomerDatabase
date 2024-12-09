using Domain.src.Entities;

namespace Business.src.Interfaces;

public interface ICustomerService
{
    IEnumerable<Customer> GetAllCustomers();
    Customer GetCustomerById(int id);
    void CreateCustomer(Customer customer);
    void UpdateCustomer(Customer customer);
    void DeleteCustomer(int id);
}
