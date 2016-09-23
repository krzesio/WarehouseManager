using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
namespace LightSwitchApplication
{
    public partial class WMSDataService
    {
        partial void BooksForDocuments_Validate(BooksForDocument entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.Book.Quantity <= entity.Quantity)
            {
                if (entity.Quantity <= 0)
                {
                    results.AddEntityError("You can't send 0 or less books to a bookstore");
                }
                results.AddEntityError("Not enough books in warehouse");
            }
        }

        partial void BooksForDocuments_Inserted(BooksForDocument entity)
        {
            entity.Book.Quantity -= entity.Quantity;
        }
    }
}
