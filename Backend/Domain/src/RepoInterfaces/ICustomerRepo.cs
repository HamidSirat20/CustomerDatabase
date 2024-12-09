using Domain.src.Entities;

namespace Domain.src.RepoInterfaces;

public interface ICustomerRepo
{
    IEnumerable<Customer> GetAllCustomers();
    Customer GetCustomerById(int id);
    void AddCustomer(Customer customer);
    void UpdateCustomer(Customer customer);
    void DeleteCustomer(int id);
}
