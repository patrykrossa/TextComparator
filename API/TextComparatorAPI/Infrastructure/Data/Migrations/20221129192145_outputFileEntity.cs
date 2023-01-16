using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class outputFileEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "OutputFiles",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UrlString",
                table: "OutputFiles",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "OutputFiles",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_OutputFiles_UserId",
                table: "OutputFiles",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_OutputFiles_Users_UserId",
                table: "OutputFiles",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OutputFiles_Users_UserId",
                table: "OutputFiles");

            migrationBuilder.DropIndex(
                name: "IX_OutputFiles_UserId",
                table: "OutputFiles");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "OutputFiles");

            migrationBuilder.DropColumn(
                name: "UrlString",
                table: "OutputFiles");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "OutputFiles");
        }
    }
}
