var mod = require('./../index.js');

// attributed string constructor
var attributed_string =  mod.createAttributedString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum leo vitae pharetra semper. Duis eget ullamcorper leo.");
printObjectWithName( attributed_string, "attributed_string" );

// attribute constructors
var font_attribute = mod.createFontAttribute( "Helvetica", 30 );
printObjectWithName( font_attribute, "font_attribute" );

var foreground_color_attribute = mod.createForegroundColorAttribute( "0xffcc00" );
printObjectWithName( foreground_color_attribute, "foreground_color_attribute" );

var background_color_attribute = mod.createBackgroundColorAttribute( "0xff0000" );
printObjectWithName( background_color_attribute, "background_color_attribute" );

var paragraph_style_attribute = mod.createParagraphStyleAttribute();
printObjectWithName( paragraph_style_attribute, "paragraph_style_attribute" );

var link_attribute = mod.createLinkAttribute("http://google.com");
printObjectWithName( link_attribute, "link_attribute" );

var shadow_attribute = mod.createShadowAttribute();
printObjectWithName( shadow_attribute, "shadow_attribute" );

var stroke_color_attribute = mod.createStrokeColorAttribute("0xff0000");
printObjectWithName( stroke_color_attribute, "stroke_color_attribute" );

var stroke_width_attribute = mod.createStrokeWidthAttribute(20);
printObjectWithName( stroke_width_attribute, "stroke_width_attribute" );

var ligature_attribute = mod.createLigatureAttribute();
printObjectWithName( ligature_attribute, "ligature_attribute" );

var attachment_attribute = mod.createAttachmentAttribute("http://www.scientificamerican.com/media/inline/steve-jobs-legacy_1_thumb.jpg");
printObjectWithName( attachment_attribute, "attachment_attribute" );

var underline_style_attribute = mod.createUnderlineStyleAttribute();
printObjectWithName( underline_style_attribute, "underline_style_attribute" );


function printObjectWithName(object,name)
{
	console.log("\n"+name+":\n", JSON.stringify(object,undefined,4));
}