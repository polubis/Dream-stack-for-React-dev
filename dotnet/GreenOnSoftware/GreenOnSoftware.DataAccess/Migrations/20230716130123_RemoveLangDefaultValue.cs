using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GreenOnSoftware.DataAccess.Migrations
{
    public partial class RemoveLangDefaultValue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Lang",
                table: "Articles",
                type: "nvarchar(2)",
                maxLength: 2,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(2)",
                oldMaxLength: 2,
                oldDefaultValue: "en");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Lang",
                table: "Articles",
                type: "nvarchar(2)",
                maxLength: 2,
                nullable: false,
                defaultValue: "en",
                oldClrType: typeof(string),
                oldType: "nvarchar(2)",
                oldMaxLength: 2);
        }
    }
}
