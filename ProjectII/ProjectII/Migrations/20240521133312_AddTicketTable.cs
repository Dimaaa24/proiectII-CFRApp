﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectII.Migrations
{
    /// <inheritdoc />
    public partial class AddTicketTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
               name: "Tickets",
               columns: table => new
               {
                   Id = table.Column<int>(type: "INTEGER", nullable: false)
                       .Annotation("Sqlite:Autoincrement", true),
                   UserId = table.Column<int>(type: "INTEGER", nullable: false),
                   SeatNumber = table.Column<int>(type: "INTEGER", nullable: false),
                   Type = table.Column<string>(type: "TEXT", nullable: false)
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Users", x => x.Id);
               });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tickets");
        }
    }
}
