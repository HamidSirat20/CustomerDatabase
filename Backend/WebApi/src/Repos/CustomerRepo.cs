using Domain.src.Entities;
using Domain.src.RepoInterfaces;

namespace WebApi.src.Repos;


public class CustomerRepo : ICustomerRepo
{
    private readonly List<Customer> _customers;

    public CustomerRepo()
    {
        _customers = new List<Customer>();
    }

    public IEnumerable<Customer> GetAllCustomers()
    {
        return _customers;
    }

    public Customer GetCustomerById(int id)
    {
        return _customers.FirstOrDefault(c => c.Id == id);
    }

    public void AddCustomer(Customer customer)
    {
        if (customer == null)
        {
            throw new ArgumentNullException(nameof(customer), "Customer cannot be null");
        }

        _customers.Add(customer);
    }

    public void UpdateCustomer(Customer customer)
    {
        // if (customer == null)
        // {
        //     throw new ArgumentNullException(nameof(customer), "Customer cannot be null");
        // }

        // var existingCustomer = GetCustomerById(customer.Id);
        // if (existingCustomer == null)
        // {
        //     throw new InvalidOperationException($"Customer with ID {customer.Id} does not exist.");
        // }

        // // Assuming a shallow copy of properties for the update
        // existingCustomer.Name = customer.Name;
        // existingCustomer.Email = customer.Email;
        // existingCustomer.Phone = customer.Phone;
        // Add more properties as necessary
    }

    public void DeleteCustomer(int id)
    {
        var customer = GetCustomerById(id);
        if (customer == null)
        {
            throw new InvalidOperationException($"Customer with ID {id} does not exist.");
        }

        _customers.Remove(customer);
    }
}