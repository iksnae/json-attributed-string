var mod = require('./../index.js');
var fs = require('fs');

// attributed string constructor
var attributed_string =  mod.createAttributedString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum leo vitae pharetra semper. Duis eget ullamcorper leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum leo vitae pharetra semper. Duis eget ullamcorper leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum leo vitae pharetra semper. Duis eget ullamcorper leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum leo vitae pharetra semper. Duis eget ullamcorper leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum leo vitae pharetra semper. Duis eget ullamcorper leo. ");


// attribute constructors
var font_attribute = mod.createFontAttribute( "Helvetica", 30 );
font_attribute.setRangeStartLocation(0);
font_attribute.setRangeLength(attributed_string.length()*0.5);
printObjectWithName( font_attribute, "font_attribute" );

var foreground_color_attribute = mod.createForegroundColorAttribute( "0xffcc00" );
foreground_color_attribute.setRangeStartLocation(10);
foreground_color_attribute.setRangeLength(10);
printObjectWithName( foreground_color_attribute, "foreground_color_attribute" );

var background_color_attribute = mod.createBackgroundColorAttribute( "0xff0000" );
background_color_attribute.setRangeStartLocation(5);
background_color_attribute.setRangeLength(25);
printObjectWithName( background_color_attribute, "background_color_attribute" );

var paragraph_style_attribute = mod.createParagraphStyleAttribute();
paragraph_style_attribute.setRangeStartLocation(0);
paragraph_style_attribute.setRangeLength(attributed_string.length());
printObjectWithName( paragraph_style_attribute, "paragraph_style_attribute" );

var link_attribute = mod.createLinkAttribute("http://google.com");
link_attribute.setRangeStartLocation(50);
link_attribute.setRangeLength(16);
printObjectWithName( link_attribute, "link_attribute" );

var shadow_attribute = mod.createShadowAttribute();
shadow_attribute.setRangeStartLocation(80);
shadow_attribute.setRangeLength(20);
printObjectWithName( shadow_attribute, "shadow_attribute" );

var stroke_color_attribute = mod.createStrokeColorAttribute("0xff0000");
stroke_color_attribute.setRangeStartLocation(100);
stroke_color_attribute.setRangeLength(10);
printObjectWithName( stroke_color_attribute, "stroke_color_attribute" );

var stroke_width_attribute = mod.createStrokeWidthAttribute(1);
stroke_width_attribute.setRangeStartLocation(100);
stroke_width_attribute.setRangeLength(10);
printObjectWithName( stroke_width_attribute, "stroke_width_attribute" );

var ligature_attribute = mod.createLigatureAttribute();
ligature_attribute.setRangeStartLocation(0);
ligature_attribute.setRangeLength(attributed_string.length()*0.5);
printObjectWithName( ligature_attribute, "ligature_attribute" );

var attachment_attribute = mod.createAttachmentAttribute("http://www.scientificamerican.com/media/inline/steve-jobs-legacy_1_thumb.jpg");
attachment_attribute.setRangeStartLocation(0);
attachment_attribute.setRangeLength(10);
printObjectWithName( attachment_attribute, "attachment_attribute" );

var underline_style_attribute = mod.createUnderlineStyleAttribute();
underline_style_attribute.setRangeStartLocation(4);
underline_style_attribute.setRangeLength(0);
printObjectWithName( underline_style_attribute, "underline_style_attribute" );

// add attributes to attributed string
attributed_string.addAttributes([
	font_attribute, 
	foreground_color_attribute,
	background_color_attribute,
	paragraph_style_attribute,
	link_attribute,
	shadow_attribute,
	stroke_color_attribute,
	stroke_width_attribute,
	ligature_attribute,
	attachment_attribute,
	underline_style_attribute]);

printObjectWithName( attributed_string, "attributed_string" );


// write example.json file
fs.writeFile('example.json', JSON.stringify(attributed_string,undefined,4), function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});


function printObjectWithName(object,name)
{
	console.log("\n"+name+":\n", JSON.stringify(object,undefined,4));
}