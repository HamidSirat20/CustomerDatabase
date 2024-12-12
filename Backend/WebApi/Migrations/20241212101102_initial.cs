using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WebApi.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "addresses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Street = table.Column<string>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    State = table.Column<string>(type: "TEXT", nullable: false),
                    ZipCode = table.Column<string>(type: "TEXT", nullable: false),
                    Country = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "customers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    AddressId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_customers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_customers_addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "addresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "addresses",
                columns: new[] { "Id", "City", "Country", "State", "Street", "ZipCode" },
                values: new object[,]
                {
                    { 1, "Springfield", "USA", "IL", "123 Elm Street", "62701" },
                    { 2, "Seattle", "USA", "WA", "456 Oak Avenue", "98101" },
                    { 3, "Austin", "USA", "TX", "789 Pine Drive", "73301" }
                });

            migrationBuilder.InsertData(
                table: "customers",
                columns: new[] { "Id", "AddressId", "Email", "FirstName", "LastName" },
                values: new object[,]
                {
                    { 1, 1, "john.doe@example.com", "John", "Doe" },
                    { 2, 2, "jane.smith@example.com", "Jane", "Smith" },
                    { 3, 3, "alice.brown@example.com", "Alice", "Brown" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_customers_AddressId",
                table: "customers",
                column: "AddressId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "customers");

            migrationBuilder.DropTable(
                name: "addresses");
        }
    }
}
