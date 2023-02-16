import Ajv from "ajv";
import listingTemplates from "../../listings/templates.json";
import listingTemplateSchema from "../../schemas/listing_template.json";

describe("Listing Templates", () => {
    const avj = new Ajv();
    const validate = avj.compile(listingTemplateSchema);

    listingTemplates.forEach((template) => {
        it("should match the listing schema", () => {
            expect(validate(template)).toBe(true)
        })
    })
});
