/ *
	JSON Attributed String
	A simple utility used to create JSON objects designed to work with NSMutableAttributedString+JSON objective-c category.
*/
exports.createAttributedString = function( base_string )
{
	return new AttributedString(base_string);
}

exports.createFontAttribute = function( fontName, fontSize )
{
	var attribute = new Attribute();
	attribute.createFontAttribute( fontName, fontSize );
	return attribute;
}

exports.createForegroundColorAttribute = function( color )
{
	var attribute = new Attribute();
	attribute.createForegroundColorAttribute( color );
	return attribute;
}

exports.createBackgroundColorAttribute = function( color )
{
	var attribute = new Attribute();
	attribute.createBackgroundColorAttribute( color );
	return attribute;
}

exports.createParagraphStyleAttribute = function()
{
	var attribute = new Attribute();
	attribute.createParagraphStyleAttribute();
	return attribute;
}

exports.createLinkAttribute = function( url )
{
	var attribute = new Attribute();
	attribute.createLinkAttribute(url);
	return attribute;
}

exports.createShadowAttribute = function()
{
	var attribute = new Attribute();
	attribute.createShadowAttribute();
	return attribute;
}


exports.createStrokeColorAttribute = function( color )
{
	var attribute = new Attribute();
	attribute.createStrokeColorAttribute( color );
	return attribute;
}

exports.createStrokeWidthAttribute = function( width )
{
	var attribute = new Attribute();
	attribute.createStrokeWidthAttribute( width );
	return attribute;
}


exports.createLigatureAttribute = function()
{
	var attribute = new Attribute();
	attribute.createLigatureAttribute();
	return attribute;
}


exports.createAttachmentAttribute = function( image_url)
{
	var attribute = new Attribute();
	attribute.createAttachmentAttribute( image_url );
	return attribute;
}



function Attribute()
{
	this.name = "";
	this.value = 0;
}

// attribute factory methods
Attribute.prototype = 
{
	
	createFontAttribute: function( fontName, fontSize )
	{
		this.name = "Font"
		this.fontName = fontName;
		this.fontSize = fontSize;
	},
	
	createForegroundColorAttribute: function( forgroundColor )
	{
		this.name = AttributeNames.ForegroundColor;
		this.value = forgroundColor;
	},
	
	createBackgroundColorAttribute: function( backgroundColor )
	{
		this.name = AttributeNames.BackgroundColor;
		this.value = backgroundColor;
	},
	
	createParagraphStyleAttribute: function()
	{
	    this.name = AttributeNames.ParagraphStyle;
        this.value = "Custom";
        this.alignment  = TextAlignment.Left;
        this.firstLineHeadIndent = 0.0;
        this.headIndent = 0.0;
        this.tailIndent = 0.0;
        this.lineHeightMultiple = 0.0;
        this.maximumLineHeight = 0.0;
        this.minimumLineHeight = 0.0;
        this.paragraphSpacing = 0.0;
        this.paragraphSpacingBefore = 0.0;
	},
	
	createLinkAttribute: function( url )
	{
		this.name = AttributeNames.Link;
		this.value = url;
	},
	
	createShadowAttribute: function()
	{
		this.name = AttributeNames.Shadow;
		this.value = "Custom";
		this.color = "0x000000";
		this.offset = {"x":1,"y":1};
	},
	
	createStrokeColorAttribute: function( color )
	{
		this.name = AttributeNames.StrokeColor;
		this.value = color;
	},
	
	createStrokeWidthAttribute: function( width )
	{
		this.name = AttributeNames.StrokeWidth;
		this.value = width;
	},
	
	createLigatureAttribute: function(){
		this.name = AttributeNames.Ligature;
		this.value = 1;
	},
	
	createAttachmentAttribute: function(image_url){
		this.name = AttributeNames.Attachment;
		this.value = image_url;
	},
	
	/*
      Convenience methods for changing range's "startIndex" and "length" values
    */
	setRangeStartIndex: function(startIndex)
	{
		this.range.startIndex = startIndex;
	},
	setRangeLength: function( rangeLength )
	{
		this.range.length = rangeLength;
	}
}


/*
	Attributed String
	
*/

function AttributedString( base_string )
{
	this.text = base_string;
	this.attributes = [];
}

AttributedString.prototype =
{
	addAttribute: function( attribute )
	{
		this.attributes.push( attribute );
	},
	addAttributes: function( attributes )
	{
		for(var i in attributes)
		{
			var attribute = attributes[i];
			this.attributes.push( attribute );
		}
	},
	
	removeAttributeForName: function ( attributeName )
	{
		for(var i in this.attributes)
		{
			var attribute = this.attributes[i];
			if(attribute.name == attributeName)
			{
				this.attributes.splice(i,1);
				continue;
			}
		}
	},
	
	length: function()
	{
		return this.text.length;
	},
	
	characterAtIndex: function( index ){
		return this.text[index];
	}
}

function Range( startIndex, length )
{
        this.startIndex = startIndex;
        this.length = length;
}

/*
	Attribute Names
	
*/
var AttributeNames = 
{
	FontName			: "Font",
	ForegroundColor		: "ForegroundColor",
	BackgroundColor		: "BackgroundColor",
	UnderlineStyle		: "UnderlineStyle",
	UnderlineColor		: "UnderlineColor",
	Ligature			: "Ligature",
	Kern				: "Kern",
	StrokeColor			: "StrokeColor",
	StrokeWidth			: "StrokeWidth",
	Shadow				: "Shadow",
	Attachment			: "Attachment",
	Link				: "Link",
	Baseline			: "BaselineOffset",
	StrikethroughStyle	: "StrikethroughStyle",
	StrikethroughColor	: "StrikethroughColor",
	UnderlineStyle		: "UnderlineStyle",
	Obliqueness			: "Obliqueness",
	Expansion			: "Expansion",
	WritingDirection	: "WritingDirection",
	VerticalGlyphForm	: "VerticalGlyphForm",
	ParagraphStyle		: "ParagraphStyle"
        
}
/*
	Text Alignment
	
*/
var TextAlignment =
{
	Left		: "Left",
	Center		: "Center",
	Right		: "Right",
	Justified	: "Justified",
	Natural		: "Natural"
}

// export constants
exports.TextAlignment = TextAlignment;
exports.AttributeNames = AttributeNames;
