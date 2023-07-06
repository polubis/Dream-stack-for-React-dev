using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GreenOnSoftware.DataAccess.Migrations
{
    public partial class AddLangField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Lang",
                table: "Articles",
                type: "nvarchar(2)",
                maxLength: 2,
                nullable: false,
                defaultValue: "en");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Lang",
                table: "Articles");
        }
    }
}
