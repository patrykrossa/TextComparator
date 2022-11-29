using Domain.Common;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class TextComparatorContext : DbContext
    {
        public DbSet<SignedInUser> Users { get; set; }
        public DbSet<OutputFile> OutputFiles { get; set; }
        public TextComparatorContext(DbContextOptions<TextComparatorContext> options) : base(options) { }
        public async Task<int> SaveChangesAsync()
        {
            var entries = ChangeTracker
                .Entries()
                .Where(e => e.Entity is AuditableEntity && (e.State == EntityState.Added || e.State == EntityState.Modified));
                
            foreach (var entry in entries)
            {
                ((AuditableEntity)entry.Entity).LastModifiedAt = DateTime.UtcNow;

                if(entry.State == EntityState.Added)
                {
                    ((AuditableEntity)entry.Entity).CreatedAt = DateTime.UtcNow;
                }
            }
            return await base.SaveChangesAsync();
        }
    }
}
