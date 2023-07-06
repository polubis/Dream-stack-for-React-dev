using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GreenOnSoftware.DataAccess.Migrations
{
    public partial class AddSnippetCreatedDateAndArticleLangField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Snippets",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

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
                name: "CreatedDate",
                table: "Snippets");

            migrationBuilder.DropColumn(
                name: "Lang",
                table: "Articles");
        }
    }
}
