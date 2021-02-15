/**
 * @typedef {Object} ScreenMode - The screen mode.
 * @property {2} DESKTOP - Full screen with menu bar.
 * @property {3} FULLSCREEN - Full screen without menu bar.
 * @property {1} MULTIWINDOW - Display multiple windows.
*/
/** @type {ScreenMode} */
const ScreenMode = {
	DESKTOP : 2,
	FULLSCREEN : 3,
	MULTIWINDOW : 1,
};

/**
 * @typedef {Object} ColorType - The color model.
 * @property {1} CMYK -
 * @property {4} GRADIENT -
 * @property {0} GRAY -
 * @property {6} None -
 * @property {2} PATTERN -
 * @property {5} RGB -
 * @property {3} SPOT -
*/
/** @type {ColorType} */
const ColorType = {
	CMYK : 1,
	GRADIENT : 4,
	GRAY : 0,
	None : 6,
	PATTERN : 2,
	RGB : 5,
	SPOT : 3,
};

/**
 * @typedef {Object} DocumentColorSpace - The color spaces available for documents.
 * @property {2} CMYK - CMYK document color space.
 * @property {1} RGB - RGB document color space.
*/
/** @type {DocumentColorSpace} */
const DocumentColorSpace = {
	CMYK : 2,
	RGB : 1,
};

/**
 * @typedef {Object} DocumentPresetType - The preset types available for new documents.
 * @property {5} BasicCMYK - The default CMYK document preset.
 * @property {6} BasicRGB - The default RGB document preset.
 * @property {3} Mobile - The default Mobile document preset.
 * @property {1} Print - The default Print document preset.
 * @property {4} Video - The default Video and Film document preset.
 * @property {2} Web - The default Web document preset.
*/
/** @type {DocumentPresetType} */
const DocumentPresetType = {
	BasicCMYK : 5,
	BasicRGB : 6,
	Mobile : 3,
	Print : 1,
	Video : 4,
	Web : 2,
};

/**
 * @typedef {Object} DocumentRasterResolution - The raster resolutions available when creating a new document.
 * @property {3} HighResolution - High raster resolution, 300 PPI.
 * @property {2} MediumResolution - Medium raster resolution, 150 PPI.
 * @property {1} ScreenResolution - Low raster resolution, 72 PPI.
*/
/** @type {DocumentRasterResolution} */
const DocumentRasterResolution = {
	HighResolution : 3,
	MediumResolution : 2,
	ScreenResolution : 1,
};

/**
 * @typedef {Object} DocumentTransparencyGrid - The transparency grid for the new document, in video presets.
 * @property {7} TransparencyGridBlue - Blue grids.
 * @property {3} TransparencyGridDark - Dark color grids.
 * @property {6} TransparencyGridGreen - Green grids.
 * @property {1} TransparencyGridLight - Light grid colors.
 * @property {2} TransparencyGridMedium - Medium grid colors.
 * @property {0} TransparencyGridNone - No grids.
 * @property {5} TransparencyGridOrange - Orange grids.
 * @property {8} TransparencyGridPurple - Purple grids.
 * @property {4} TransparencyGridRed - Red grids.
*/
/** @type {DocumentTransparencyGrid} */
const DocumentTransparencyGrid = {
	TransparencyGridBlue : 7,
	TransparencyGridDark : 3,
	TransparencyGridGreen : 6,
	TransparencyGridLight : 1,
	TransparencyGridMedium : 2,
	TransparencyGridNone : 0,
	TransparencyGridOrange : 5,
	TransparencyGridPurple : 8,
	TransparencyGridRed : 4,
};

/**
 * @typedef {Object} DocumentPreviewMode - The preview modes available when creating a new document.
 * @property {1} DefaultPreview - Default Preview mode.
 * @property {3} OverprintPreview - Overprint Preview Mode.
 * @property {2} PixelPreview - Pixel Preview mode.
*/
/** @type {DocumentPreviewMode} */
const DocumentPreviewMode = {
	DefaultPreview : 1,
	OverprintPreview : 3,
	PixelPreview : 2,
};

/**
 * @typedef {Object} DocumentArtboardLayout - The layout of artboards in document.
 * @property {4} Column - Arrange artboards in a single column.
 * @property {2} GridByCol - Arrange artboards in Grid by Column pattern.
 * @property {1} GridByRow - Arrange artboards in Grid by Row pattern.
 * @property {6} RLGridByCol - Arrange artboards in Grid by Column pattern from right-to-left.
 * @property {5} RLGridByRow - Arrange artboards in Grid by Row pattern from right-to-left.
 * @property {7} RLRow - Arrange artboards in a single row from right-to-left.
 * @property {3} Row - Arrange artboards in a single row.
*/
/** @type {DocumentArtboardLayout} */
const DocumentArtboardLayout = {
	Column : 4,
	GridByCol : 2,
	GridByRow : 1,
	RLGridByCol : 6,
	RLGridByRow : 5,
	RLRow : 7,
	Row : 3,
};

/**
 * @typedef {Object} ImageColorSpace - The color space.
 * @property {3} CMYK - CMYK color space.
 * @property {6} DeviceN - DeviceN color space.
 * @property {1} GrayScale - Gray color space.
 * @property {7} Indexed - Indexed color space.
 * @property {4} LAB - LAB color space.
 * @property {2} RGB - RGB color space.
 * @property {5} Separation - Separation color space.
*/
/** @type {ImageColorSpace} */
const ImageColorSpace = {
	CMYK : 3,
	DeviceN : 6,
	GrayScale : 1,
	Indexed : 7,
	LAB : 4,
	RGB : 2,
	Separation : 5,
};

/**
 * @typedef {Object} StrokeCap - The stroke cap.
 * @property {1} BUTTENDCAP - Butted cap.
 * @property {3} PROJECTINGENDCAP - Projecting cap.
 * @property {2} ROUNDENDCAP - Rounded cap.
*/
/** @type {StrokeCap} */
const StrokeCap = {
	BUTTENDCAP : 1,
	PROJECTINGENDCAP : 3,
	ROUNDENDCAP : 2,
};

/**
 * @typedef {Object} StrokeJoin - The stroke joint.
 * @property {3} BEVELENDJOIN - Beveled joints.
 * @property {1} MITERENDJOIN - Mitered joints.
 * @property {2} ROUNDENDJOIN - Rounded joints.
*/
/** @type {StrokeJoin} */
const StrokeJoin = {
	BEVELENDJOIN : 3,
	MITERENDJOIN : 1,
	ROUNDENDJOIN : 2,
};

/**
 * @typedef {Object} PathPointSelection - The path point selection state.
 * @property {2} ANCHORPOINT - Anchor point selected.
 * @property {3} LEFTDIRECTION - Left direction point selected.
 * @property {5} LEFTRIGHTPOINT - Left and right direction points selected.
 * @property {1} NOSELECTION - Path point not selected.
 * @property {4} RIGHTDIRECTION - Right direction point selected.
*/
/** @type {PathPointSelection} */
const PathPointSelection = {
	ANCHORPOINT : 2,
	LEFTDIRECTION : 3,
	LEFTRIGHTPOINT : 5,
	NOSELECTION : 1,
	RIGHTDIRECTION : 4,
};

/**
 * @typedef {Object} PointType - The path point type: smooth/corner.
 * @property {2} CORNER - Corner point.
 * @property {1} SMOOTH - Smooth path point.
*/
/** @type {PointType} */
const PointType = {
	CORNER : 2,
	SMOOTH : 1,
};

/**
 * @typedef {Object} TextType - The type of text art.
 * @property {1} AREATEXT - Text within an area.
 * @property {2} PATHTEXT - Text on a path.
 * @property {0} POINTTEXT - Text from a point.
*/
/** @type {TextType} */
const TextType = {
	AREATEXT : 1,
	PATHTEXT : 2,
	POINTTEXT : 0,
};

/**
 * @typedef {Object} TextAntialias - The type of text antialiasing.
 * @property {3} CRISP - Text on a path.
 * @property {1} NONE - Text from a point.
 * @property {2} SHARP - Text within an area.
 * @property {4} STRONG - Text on a path.
*/
/** @type {TextAntialias} */
const TextAntialias = {
	CRISP : 3,
	NONE : 1,
	SHARP : 2,
	STRONG : 4,
};

/**
 * @typedef {Object} GradientType - The gradient type.
 * @property {1} LINEAR - Linear gradient.
 * @property {2} RADIAL -
*/
/** @type {GradientType} */
const GradientType = {
	LINEAR : 1,
	RADIAL : 2,
};

/**
 * @typedef {Object} TextOrientation - The orientation.
 * @property {0} HORIZONTAL - Horizontal orientation.
 * @property {1} VERTICAL - Vertical orientation.
*/
/** @type {TextOrientation} */
const TextOrientation = {
	HORIZONTAL : 0,
	VERTICAL : 1,
};

/**
 * @typedef {Object} CropOptions - The crop style.
 * @property {2} Japanese - Japanese crop style.
 * @property {1} Standard - Standard crop style.
*/
/** @type {CropOptions} */
const CropOptions = {
	Japanese : 2,
	Standard : 1,
};

/**
 * @typedef {Object} RasterLinkState - The raster link state.
 * @property {2} DATAFROMFILE - Image data is from the linked file.
 * @property {3} DATAMODIFIED - Image data has been modified.
 * @property {1} NODATA - Image data is not set.
*/
/** @type {RasterLinkState} */
const RasterLinkState = {
	DATAFROMFILE : 2,
	DATAMODIFIED : 3,
	NODATA : 1,
};

/**
 * @typedef {Object} TabStopAlignment - The tab alignment.
 * @property {1} Center -
 * @property {3} Decimal -
 * @property {0} Left -
 * @property {2} Right -
*/
/** @type {TabStopAlignment} */
const TabStopAlignment = {
	Center : 1,
	Decimal : 3,
	Left : 0,
	Right : 2,
};

/**
 * @typedef {Object} Justification - The paragraph alignment.
 * @property {2} CENTER -
 * @property {6} FULLJUSTIFY -
 * @property {5} FULLJUSTIFYLASTLINECENTER -
 * @property {3} FULLJUSTIFYLASTLINELEFT -
 * @property {4} FULLJUSTIFYLASTLINERIGHT -
 * @property {0} LEFT -
 * @property {1} RIGHT -
*/
/** @type {Justification} */
const Justification = {
	CENTER : 2,
	FULLJUSTIFY : 6,
	FULLJUSTIFYLASTLINECENTER : 5,
	FULLJUSTIFYLASTLINELEFT : 3,
	FULLJUSTIFYLASTLINERIGHT : 4,
	LEFT : 0,
	RIGHT : 1,
};

/**
 * @typedef {Object} Transformation - The transformation type.
 * @property {7} BOTTOM - Transform relative to the object's bottom edge.
 * @property {4} BOTTOMLEFT - Transform relative to the object's bottom left corner.
 * @property {10} BOTTOMRIGHT - Transform relative to the object's bottom right corner.
 * @property {6} CENTER - Transform relative to the object's center.
 * @property {1} DOCUMENTORIGIN - Transform relative to the illustration's page origin.
 * @property {3} LEFT - Transform relative to the object's left edge.
 * @property {9} RIGHT - Transform relative to the object's right edge.
 * @property {5} TOP - Transform relative to the object's top edge.
 * @property {2} TOPLEFT - Transform relative to the object's top left corner.
 * @property {8} TOPRIGHT - Transform relative to the object's top right corner.
*/
/** @type {Transformation} */
const Transformation = {
	BOTTOM : 7,
	BOTTOMLEFT : 4,
	BOTTOMRIGHT : 10,
	CENTER : 6,
	DOCUMENTORIGIN : 1,
	LEFT : 3,
	RIGHT : 9,
	TOP : 5,
	TOPLEFT : 2,
	TOPRIGHT : 8,
};

/**
 * @typedef {Object} LibraryType - Illustrator library types.
 * @property {3} BRUSHES - Illustrator brushes library.
 * @property {4} GRAPHICSTYLES - Illustrator graphic styles library.
 * @property {1} ILLUSTRATORARTWORK - Illustrator artwork.
 * @property {2} SWATCHES - Illustrator swatches library.
 * @property {5} SYMBOLS - Illustrator symbols library.
*/
/** @type {LibraryType} */
const LibraryType = {
	BRUSHES : 3,
	GRAPHICSTYLES : 4,
	ILLUSTRATORARTWORK : 1,
	SWATCHES : 2,
	SYMBOLS : 5,
};

/**
 * @typedef {Object} DocumentType - Savable document types.
 * @property {2} EPS - EPS file format.
 * @property {4} FXG - FXG file format.
 * @property {1} ILLUSTRATOR - Illustrator file format.
 * @property {3} PDF - Acrobat PDF file format.
*/
/** @type {DocumentType} */
const DocumentType = {
	EPS : 2,
	FXG : 4,
	ILLUSTRATOR : 1,
	PDF : 3,
};

/**
 * @typedef {Object} ExportType - Export file types.
 * @property {8} AUTOCAD - AutoCAD export file format.
 * @property {7} FLASH - Flash export file format.
 * @property {6} GIF - GIF export file format.
 * @property {1} JPEG - JPEG export file format.
 * @property {2} PHOTOSHOP - Photoshop export file format.
 * @property {5} PNG24 - PNG 24-bit export file format.
 * @property {4} PNG8 - PNG 8-bit export file format.
 * @property {3} SVG - SVG export file format.
 * @property {9} TIFF - TIFF export file format.
 * @property {10} WOSVG - Web Optimized SVG export file format.
*/
/** @type {ExportType} */
const ExportType = {
	AUTOCAD : 8,
	FLASH : 7,
	GIF : 6,
	JPEG : 1,
	PHOTOSHOP : 2,
	PNG24 : 5,
	PNG8 : 4,
	SVG : 3,
	TIFF : 9,
	WOSVG : 10,
};

/**
 * @typedef {Object} ColorReductionMethod - Method used to reduce color for PNG8 and GIF export formats.
 * @property {0x41647074} ADAPTIVE -
 * @property {0x50726370} PERCEPTUAL -
 * @property {0x536c7476} SELECTIVE -
 * @property {0x57656220} WEB -
*/
/** @type {ColorReductionMethod} */
const ColorReductionMethod = {
	ADAPTIVE : 0x41647074,
	PERCEPTUAL : 0x50726370,
	SELECTIVE : 0x536c7476,
	WEB : 0x57656220,
};

/**
 * @typedef {Object} ColorDitherMethod - Method used to dither colors for PNG8 and GIF export formats.
 * @property {0x4466736e} DIFFUSION -
 * @property {0x424e6f69} NOISE -
 * @property {0x4e6f6e65} NOREDUCTION - No dithering.
 * @property {0x5074726e} PATTERNDITHER -
*/
/** @type {ColorDitherMethod} */
const ColorDitherMethod = {
	DIFFUSION : 0x4466736e,
	NOISE : 0x424e6f69,
	NOREDUCTION : 0x4e6f6e65,
	PATTERNDITHER : 0x5074726e,
};

/**
 * @typedef {Object} Compatibility - The compatibility type.
 * @property {10} ILLUSTRATOR10 -
 * @property {11} ILLUSTRATOR11 -
 * @property {12} ILLUSTRATOR12 -
 * @property {13} ILLUSTRATOR13 -
 * @property {14} ILLUSTRATOR14 -
 * @property {15} ILLUSTRATOR15 -
 * @property {16} ILLUSTRATOR16 -
 * @property {17} ILLUSTRATOR17 -
 * @property {3} ILLUSTRATOR3 -
 * @property {8} ILLUSTRATOR8 -
 * @property {9} ILLUSTRATOR9 -
 * @property {3} JAPANESEVERSION3 -
*/
/** @type {Compatibility} */
const Compatibility = {
	ILLUSTRATOR10 : 10,
	ILLUSTRATOR11 : 11,
	ILLUSTRATOR12 : 12,
	ILLUSTRATOR13 : 13,
	ILLUSTRATOR14 : 14,
	ILLUSTRATOR15 : 15,
	ILLUSTRATOR16 : 16,
	ILLUSTRATOR17 : 17,
	ILLUSTRATOR3 : 3,
	ILLUSTRATOR8 : 8,
	ILLUSTRATOR9 : 9,
	JAPANESEVERSION3 : 3,
};

/**
 * @typedef {Object} PDFXStandard - This provides a means for matching the color characteristics of a PDF document.
 * @property {2} PDFX1A2001 - Supports only a CMYK and spot color workflow, targeted to a specific output device.
 * @property {3} PDFX1A2003 - Supports only a CMYK and spot color workflow, targeted to a specific output device.
 * @property {4} PDFX32001 - Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
 * @property {4} PDFX32002 - Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
 * @property {5} PDFX32003 - Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
 * @property {6} PDFX42007 - Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
 * @property {1} PDFXNONE - The user isn't complying with any PDF standard.
*/
/** @type {PDFXStandard} */
const PDFXStandard = {
	PDFX1A2001 : 2,
	PDFX1A2003 : 3,
	PDFX32001 : 4,
	PDFX32002 : 4,
	PDFX32003 : 5,
	PDFX42007 : 6,
	PDFXNONE : 1,
};

/**
 * @typedef {Object} PDFCompatibility - The PDF compatibility type.
 * @property {4} ACROBAT4 - Acrobat version 4.
 * @property {5} ACROBAT5 - Acrobat version 5.
 * @property {6} ACROBAT6 - Acrobat version 6.
 * @property {7} ACROBAT7 - Acrobat version 7.
 * @property {8} ACROBAT8 - Acrobat version 8.
*/
/** @type {PDFCompatibility} */
const PDFCompatibility = {
	ACROBAT4 : 4,
	ACROBAT5 : 5,
	ACROBAT6 : 6,
	ACROBAT7 : 7,
	ACROBAT8 : 8,
};

/**
 * @typedef {Object} PhotoshopCompatibility - The Photoshop compatibility type.
 * @property {2} PHOTOSHOP6 - Photoshop version 6.
 * @property {1} PHOTOSHOP8 - Photoshop version 8.
*/
/** @type {PhotoshopCompatibility} */
const PhotoshopCompatibility = {
	PHOTOSHOP6 : 2,
	PHOTOSHOP8 : 1,
};

/**
 * @typedef {Object} CompressionQuality - The compression type.
 * @property {18} AUTOMATICJPEG2000HIGH - Automatic JPEG2000 compression high.
 * @property {20} AUTOMATICJPEG2000LOSSLESS - Automatic JPEG2000 compression lossless.
 * @property {16} AUTOMATICJPEG2000LOW - Automatic JPEG2000 compression low.
 * @property {19} AUTOMATICJPEG2000MAXIMUM - Automatic JPEG2000 compression maximum.
 * @property {17} AUTOMATICJPEG2000MEDIUM - Automatic JPEG2000 compression medium.
 * @property {15} AUTOMATICJPEG2000MINIMUM - Automatic JPEG2000 compression minimum.
 * @property {13} AUTOMATICJPEGHIGH - Automatic JPEG compression high.
 * @property {11} AUTOMATICJPEGLOW - Automatic JPEG compression low.
 * @property {14} AUTOMATICJPEGMAXIMUM - Automatic JPEG compression maximum.
 * @property {12} AUTOMATICJPEGMEDIUM - Automatic JPEG compression medium.
 * @property {10} AUTOMATICJPEGMINIMUM - Automatically choose between JPEG and ZIP performing minimum compression depending on images.
 * @property {24} JPEG2000HIGH -
 * @property {26} JPEG2000LOSSLESS -
 * @property {22} JPEG2000LOW -
 * @property {25} JPEG2000MAXIMUM -
 * @property {23} JPEG2000MEDIUM -
 * @property {21} JPEG2000MINIMUM -
 * @property {6} JPEGHIGH -
 * @property {4} JPEGLOW -
 * @property {7} JPEGMAXIMUM -
 * @property {5} JPEGMEDIUM -
 * @property {3} JPEGMINIMUM -
 * @property {1} None - Automatic compression.
 * @property {8} ZIP4BIT -
 * @property {9} ZIP8BIT -
*/
/** @type {CompressionQuality} */
const CompressionQuality = {
	AUTOMATICJPEG2000HIGH : 18,
	AUTOMATICJPEG2000LOSSLESS : 20,
	AUTOMATICJPEG2000LOW : 16,
	AUTOMATICJPEG2000MAXIMUM : 19,
	AUTOMATICJPEG2000MEDIUM : 17,
	AUTOMATICJPEG2000MINIMUM : 15,
	AUTOMATICJPEGHIGH : 13,
	AUTOMATICJPEGLOW : 11,
	AUTOMATICJPEGMAXIMUM : 14,
	AUTOMATICJPEGMEDIUM : 12,
	AUTOMATICJPEGMINIMUM : 10,
	JPEG2000HIGH : 24,
	JPEG2000LOSSLESS : 26,
	JPEG2000LOW : 22,
	JPEG2000MAXIMUM : 25,
	JPEG2000MEDIUM : 23,
	JPEG2000MINIMUM : 21,
	JPEGHIGH : 6,
	JPEGLOW : 4,
	JPEGMAXIMUM : 7,
	JPEGMEDIUM : 5,
	JPEGMINIMUM : 3,
	None : 1,
	ZIP4BIT : 8,
	ZIP8BIT : 9,
};

/**
 * @typedef {Object} ColorConversion - PDF color conversion policy.
 * @property {2} COLORCONVERSIONREPURPOSE - Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
 * @property {1} COLORCONVERSIONTODEST - Converts all colors to the profile selected for Destination.
 * @property {0} None - Preserves color data as is.
*/
/** @type {ColorConversion} */
const ColorConversion = {
	COLORCONVERSIONREPURPOSE : 2,
	COLORCONVERSIONTODEST : 1,
	None : 0,
};

/**
 * @typedef {Object} ColorDestination - PDF destination profile.
 * @property {1} COLORDESTINATIONDOCCMYK - Converts all colors to the profile selected for Destination.
 * @property {3} COLORDESTINATIONDOCRGB - Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
 * @property {5} COLORDESTINATIONPROFILE - Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
 * @property {2} COLORDESTINATIONWORKINGCMYK - Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
 * @property {4} COLORDESTINATIONWORKINGRGB - Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
 * @property {0} None - N/A.
*/
/** @type {ColorDestination} */
const ColorDestination = {
	COLORDESTINATIONDOCCMYK : 1,
	COLORDESTINATIONDOCRGB : 3,
	COLORDESTINATIONPROFILE : 5,
	COLORDESTINATIONWORKINGCMYK : 2,
	COLORDESTINATIONWORKINGRGB : 4,
	None : 0,
};

/**
 * @typedef {Object} ColorProfile - PDF ICC profile inclusion.
 * @property {1} INCLUDEALLPROFILE - Everything gets tagged (embedProfile == true)
 * @property {4} INCLUDEDESTPROFILE - Everything ends up tagged with the destination profile.
 * @property {3} INCLUDERGBPROFILE - Tag all RGB, leave CMYK unchanged.
 * @property {2} LEAVEPROFILEUNCHANGED - Leave tagged items tagged, untagged items untagged.
 * @property {0} None - All profiles removed (embedProfile == false)
*/
/** @type {ColorProfile} */
const ColorProfile = {
	INCLUDEALLPROFILE : 1,
	INCLUDEDESTPROFILE : 4,
	INCLUDERGBPROFILE : 3,
	LEAVEPROFILEUNCHANGED : 2,
	None : 0,
};

/**
 * @typedef {Object} MonochromeCompression - The monochrome compression type.
 * @property {1} CCIT3 - CCITT Group 3 compression.
 * @property {2} CCIT4 - CCITT Group 4 compression.
 * @property {3} MONOZIP - ZIP compression.
 * @property {0} None - Automatic compression.
 * @property {4} RUNLENGTH - RLE compression.
*/
/** @type {MonochromeCompression} */
const MonochromeCompression = {
	CCIT3 : 1,
	CCIT4 : 2,
	MONOZIP : 3,
	None : 0,
	RUNLENGTH : 4,
};

/**
 * @typedef {Object} PDFTrimMarkWeight - Pdf trim mark weight options.
 * @property {1} TRIMMARKWEIGHT0125 -
 * @property {2} TRIMMARKWEIGHT025 -
 * @property {3} TRIMMARKWEIGHT05 -
*/
/** @type {PDFTrimMarkWeight} */
const PDFTrimMarkWeight = {
	TRIMMARKWEIGHT0125 : 1,
	TRIMMARKWEIGHT025 : 2,
	TRIMMARKWEIGHT05 : 3,
};

/**
 * @typedef {Object} PDFOverprint - Pdf overprint options.
 * @property {2} DISCARDPDFOVERPRINT - Discard overprint.
 * @property {1} PRESERVEPDFOVERPRINT - Preserve overprint.
*/
/** @type {PDFOverprint} */
const PDFOverprint = {
	DISCARDPDFOVERPRINT : 2,
	PRESERVEPDFOVERPRINT : 1,
};

/**
 * @typedef {Object} PDFPrintAllowedEnum - Pdf print permissions.
 * @property {3} PRINT128HIGHRESOLUTION - Print high resolution allowed - 128bit.
 * @property {2} PRINT128LOWRESOLUTION - Print allowed only in low resolution - 128bit.
 * @property {1} PRINT128NONE - Printing allowed none - 128bit.
 * @property {5} PRINT40HIGHRESOLUTION - Print high resolution allowed - 40bit.
 * @property {4} PRINT40NONE - Printing allowed none - 40bit.
*/
/** @type {PDFPrintAllowedEnum} */
const PDFPrintAllowedEnum = {
	PRINT128HIGHRESOLUTION : 3,
	PRINT128LOWRESOLUTION : 2,
	PRINT128NONE : 1,
	PRINT40HIGHRESOLUTION : 5,
	PRINT40NONE : 4,
};

/**
 * @typedef {Object} PDFChangesAllowedEnum - Options available for making changes to a pdf document.
 * @property {5} CHANGE128ANYCHANGES - Any changes allowed except extracting of pages- 128bit.
 * @property {4} CHANGE128COMMENTING - Comment allowed - 128bit.
 * @property {2} CHANGE128EDITPAGE - Editing page allowed - 128bit.
 * @property {3} CHANGE128FILLFORM - Filling in of form field and signing allowed - 128bit.
 * @property {1} CHANGE128NONE - No changes allowed - 128bit.
 * @property {9} CHANGE40ANYCHANGES - Any changes allowed except extracting of pages- 40bit.
 * @property {7} CHANGE40COMMENTING - Comment allowed - 40bit.
 * @property {6} CHANGE40NONE - No changes allowed - 40bit.
 * @property {8} CHANGE40PAGELAYOUT - Page layout allowed - 40bit.
*/
/** @type {PDFChangesAllowedEnum} */
const PDFChangesAllowedEnum = {
	CHANGE128ANYCHANGES : 5,
	CHANGE128COMMENTING : 4,
	CHANGE128EDITPAGE : 2,
	CHANGE128FILLFORM : 3,
	CHANGE128NONE : 1,
	CHANGE40ANYCHANGES : 9,
	CHANGE40COMMENTING : 7,
	CHANGE40NONE : 6,
	CHANGE40PAGELAYOUT : 8,
};

/**
 * @typedef {Object} DownsampleMethod - The resample type.
 * @property {1} AVERAGEDOWNSAMPLE - Average Downsampling.
 * @property {3} BICUBICDOWNSAMPLE - Bicubic Downsampling.
 * @property {0} NODOWNSAMPLE - Downsampling.
 * @property {2} SUBSAMPLE - Subsampling.
*/
/** @type {DownsampleMethod} */
const DownsampleMethod = {
	AVERAGEDOWNSAMPLE : 1,
	BICUBICDOWNSAMPLE : 3,
	NODOWNSAMPLE : 0,
	SUBSAMPLE : 2,
};

/**
 * @typedef {Object} EPSPreview - The preview type.
 * @property {2} BWMACINTOSH - Black and white Macintosh preview.
 * @property {4} BWTIFF - Black and white PC preview.
 * @property {3} COLORMACINTOSH - Color Macintosh preview.
 * @property {6} COLORTIFF - Color PC preview.
 * @property {1} None - No preview.
 * @property {5} TRANSPARENTCOLORTIFF - Transparent color PC preview (8 or later)
*/
/** @type {EPSPreview} */
const EPSPreview = {
	BWMACINTOSH : 2,
	BWTIFF : 4,
	COLORMACINTOSH : 3,
	COLORTIFF : 6,
	None : 1,
	TRANSPARENTCOLORTIFF : 5,
};

/**
 * @typedef {Object} EPSPostScriptLevelEnum - The PostScript levels available when saving EPS files.
 * @property {2} LEVEL2 - PostScript Level 2.
 * @property {3} LEVEL3 - PostScript Level 3.
*/
/** @type {EPSPostScriptLevelEnum} */
const EPSPostScriptLevelEnum = {
	LEVEL2 : 2,
	LEVEL3 : 3,
};

/**
 * @typedef {Object} PrinterPostScriptLevelEnum - The PostScript levels supported by various printers.
 * @property {1} PSLEVEL1 - PostScript Level 1.
 * @property {2} PSLEVEL2 - PostScript Level 2.
 * @property {3} PSLEVEL3 - PostScript Level 3.
*/
/** @type {PrinterPostScriptLevelEnum} */
const PrinterPostScriptLevelEnum = {
	PSLEVEL1 : 1,
	PSLEVEL2 : 2,
	PSLEVEL3 : 3,
};

/**
 * @typedef {Object} SaveOptions - The options that may be applied when saving a file.
 * @property {2} DONOTSAVECHANGES - Do not save changes.
 * @property {3} PROMPTTOSAVECHANGES - Ask the user whether to save.
 * @property {1} SAVECHANGES - Save changes.
*/
/** @type {SaveOptions} */
const SaveOptions = {
	DONOTSAVECHANGES : 2,
	PROMPTTOSAVECHANGES : 3,
	SAVECHANGES : 1,
};

/**
 * @typedef {Object} RulerUnits -
 * @property {3} Centimeters - Ruler units are measured in centimeters.
 * @property {2} Inches - Ruler units are unknown.
 * @property {6} Millimeters - Ruler units are measured in millimeters.
 * @property {5} Picas - Ruler units are measured in picas.
 * @property {8} Pixels - Ruler units are measured in pixels.
 * @property {4} Points - Ruler units are measured in points.
 * @property {7} Qs - Ruler units are measured in Qs.
 * @property {1} Unknown - Ruler units are unknown.
*/
/** @type {RulerUnits} */
const RulerUnits = {
	Centimeters : 3,
	Inches : 2,
	Millimeters : 6,
	Picas : 5,
	Pixels : 8,
	Points : 4,
	Qs : 7,
	Unknown : 1,
};

/**
 * @typedef {Object} BlendModes - Blend modes used when compositing an object.
 * @property {14} COLORBLEND -
 * @property {7} COLORBURN -
 * @property {6} COLORDODGE -
 * @property {8} DARKEN -
 * @property {10} DIFFERENCE -
 * @property {11} EXCLUSION -
 * @property {5} HARDLIGHT -
 * @property {12} HUE -
 * @property {9} LIGHTEN -
 * @property {15} LUMINOSITY -
 * @property {1} MULTIPLY -
 * @property {0} NORMAL -
 * @property {3} OVERLAY -
 * @property {13} SATURATIONBLEND -
 * @property {2} SCREEN -
 * @property {4} SOFTLIGHT -
*/
/** @type {BlendModes} */
const BlendModes = {
	COLORBLEND : 14,
	COLORBURN : 7,
	COLORDODGE : 6,
	DARKEN : 8,
	DIFFERENCE : 10,
	EXCLUSION : 11,
	HARDLIGHT : 5,
	HUE : 12,
	LIGHTEN : 9,
	LUMINOSITY : 15,
	MULTIPLY : 1,
	NORMAL : 0,
	OVERLAY : 3,
	SATURATIONBLEND : 13,
	SCREEN : 2,
	SOFTLIGHT : 4,
};

/**
 * @typedef {Object} KnockoutState - Knockout state of a page item.
 * @property {0} DISABLED - Knockout off.
 * @property {1} ENABLED - Knockout off.
 * @property {2} INHERITED - Knockout state inherited from group?
 * @property {-1} Unknown - Unknown/uninitialized knockout state.
*/
/** @type {KnockoutState} */
const KnockoutState = {
	DISABLED : 0,
	ENABLED : 1,
	INHERITED : 2,
	Unknown : -1,
};

/**
 * @typedef {Object} ZOrderMethod - How to re-arrange the art item.
 * @property {2} BRINGFORWARD - Move art one step forward in it's group or layer.
 * @property {1} BRINGTOFRONT - Move art to front of it's group or layer.
 * @property {3} SENDBACKWARD - Move art one step backwards in it's group or layer.
 * @property {4} SENDTOBACK - Move art to back of it's group or layer.
*/
/** @type {ZOrderMethod} */
const ZOrderMethod = {
	BRINGFORWARD : 2,
	BRINGTOFRONT : 1,
	SENDBACKWARD : 3,
	SENDTOBACK : 4,
};

/**
 * @typedef {Object} SVGDTDVersion - The version of the SVG DTD.
 * @property {1} SVG1_0 - SVG 1.0.
 * @property {2} SVG1_1 - SVG 1.1.
 * @property {5} SVGBASIC1_1 - SVG Basic 1.1.
 * @property {3} SVGTINY1_1 - SVG Tiny 1.1.
 * @property {4} SVGTINY1_1PLUS - SVG Tiny 1.1 Plus.
 * @property {6} SVGTINY1_2 - SVG Tiny 1.2.
*/
/** @type {SVGDTDVersion} */
const SVGDTDVersion = {
	SVG1_0 : 1,
	SVG1_1 : 2,
	SVGBASIC1_1 : 5,
	SVGTINY1_1 : 3,
	SVGTINY1_1PLUS : 4,
	SVGTINY1_2 : 6,
};

/**
 * @typedef {Object} SVGFontType - What font type to include with the file?
 * @property {3} OUTLINEFONT -
 * @property {2} SVGFONT -
*/
/** @type {SVGFontType} */
const SVGFontType = {
	OUTLINEFONT : 3,
	SVGFONT : 2,
};

/**
 * @typedef {Object} SVGFontSubsetting - What fonts to include with the file?
 * @property {7} ALLGLYPHS -
 * @property {3} COMMONENGLISH -
 * @property {5} COMMONROMAN -
 * @property {2} GLYPHSUSED -
 * @property {4} GLYPHSUSEDPLUSENGLISH -
 * @property {6} GLYPHSUSEDPLUSROMAN -
 * @property {1} None - Use system fonts.
*/
/** @type {SVGFontSubsetting} */
const SVGFontSubsetting = {
	ALLGLYPHS : 7,
	COMMONENGLISH : 3,
	COMMONROMAN : 5,
	GLYPHSUSED : 2,
	GLYPHSUSEDPLUSENGLISH : 4,
	GLYPHSUSEDPLUSROMAN : 6,
	None : 1,
};

/**
 * @typedef {Object} SVGDocumentEncoding -
 * @property {1} ASCII - ISO 8859-1.
 * @property {3} UTF16 -
 * @property {2} UTF8 -
*/
/** @type {SVGDocumentEncoding} */
const SVGDocumentEncoding = {
	ASCII : 1,
	UTF16 : 3,
	UTF8 : 2,
};

/**
 * @typedef {Object} SVGCSSPropertyLocation -
 * @property {2} ENTITIES - Style attributes with entity reference.
 * @property {4} PRESENTATIONATTRIBUTES -
 * @property {1} STYLEATTRIBUTES -
 * @property {3} STYLEELEMENTS -
*/
/** @type {SVGCSSPropertyLocation} */
const SVGCSSPropertyLocation = {
	ENTITIES : 2,
	PRESENTATIONATTRIBUTES : 4,
	STYLEATTRIBUTES : 1,
	STYLEELEMENTS : 3,
};

/**
 * @typedef {Object} SVGIdType - Type of SVG Id.
 * @property {0} SVGIDMINIMAL - Style attributes with entity reference.
 * @property {1} SVGIDREGULAR -
 * @property {2} SVGIDUNIQUE -
*/
/** @type {SVGIdType} */
const SVGIdType = {
	SVGIDMINIMAL : 0,
	SVGIDREGULAR : 1,
	SVGIDUNIQUE : 2,
};

/**
 * @typedef {Object} RasterImageLocation - Decide where the raster images will be stored.
 * @property {0} EMBED - Embed the raster images in the svg file.
 * @property {1} LINK -
 * @property {2} PRESERVE -
*/
/** @type {RasterImageLocation} */
const RasterImageLocation = {
	EMBED : 0,
	LINK : 1,
	PRESERVE : 2,
};

/**
 * @typedef {Object} OutputFlattening - How should transparency be flattened for pre-AI9 file formats.
 * @property {1} PRESERVEAPPEARANCE -
 * @property {0} PRESERVEPATHS - Discard transparency.
*/
/** @type {OutputFlattening} */
const OutputFlattening = {
	PRESERVEAPPEARANCE : 1,
	PRESERVEPATHS : 0,
};

/**
 * @typedef {Object} ColorModel - Color model of the custom color.
 * @property {1} PROCESS - Process color (mixed ink)
 * @property {0} REGISTRATION - Registration color (prints on in all separations)
 * @property {2} SPOT - Spot color (separate ink)
*/
/** @type {ColorModel} */
const ColorModel = {
	PROCESS : 1,
	REGISTRATION : 0,
	SPOT : 2,
};

/**
 * @typedef {Object} SpotColorKind - Custom color kind of the spot color.
 * @property {0} SPOTCMYK - Solid ink, expressed in four CMYK values.
 * @property {2} SPOTLAB - Lab color. Only valid for spot colors.
 * @property {1} SPOTRGB - Solid color, expressed as three RGB values.
*/
/** @type {SpotColorKind} */
const SpotColorKind = {
	SPOTCMYK : 0,
	SPOTLAB : 2,
	SPOTRGB : 1,
};

/**
 * @typedef {Object} FlashExportStyle -
 * @property {5} ARTBOARDSTOFILES - Illustrator Artboards to Flash Files.
 * @property {1} ASFLASHFILE - Illustrator file to Flash file.
 * @property {3} LAYERSASFILES - Illustrator layers to Flash files.
 * @property {2} LAYERSASFRAMES - Illustrator layers to Flash frames.
 * @property {4} LAYERSASSYMBOLS - Illustrator layers to Flash Symbols.
*/
/** @type {FlashExportStyle} */
const FlashExportStyle = {
	ARTBOARDSTOFILES : 5,
	ASFLASHFILE : 1,
	LAYERSASFILES : 3,
	LAYERSASFRAMES : 2,
	LAYERSASSYMBOLS : 4,
};

/**
 * @typedef {Object} ArtClippingOption - How the arts should be clipped.
 * @property {2} OUTPUTARTBOARDBOUNDS - Output size is the size of the artboard.
 * @property {1} OUTPUTARTBOUNDS - Output size is the size of the artwork.
 * @property {3} OUTPUTCROPRECTBOUNDS - Output size is the size of the crop area.
*/
/** @type {ArtClippingOption} */
const ArtClippingOption = {
	OUTPUTARTBOARDBOUNDS : 2,
	OUTPUTARTBOUNDS : 1,
	OUTPUTCROPRECTBOUNDS : 3,
};

/**
 * @typedef {Object} FlashExportVersion - Version of the SWF File to be exported.
 * @property {1} FLASHVERSION1 - SWF Version 1.
 * @property {2} FLASHVERSION2 - SWF Version 2.
 * @property {3} FLASHVERSION3 - SWF Version 3.
 * @property {4} FLASHVERSION4 - SWF Version 4.
 * @property {5} FLASHVERSION5 - SWF Version 5.
 * @property {6} FLASHVERSION6 - SWF Version 6.
 * @property {7} FLASHVERSION7 - SWF Version 7.
 * @property {8} FLASHVERSION8 - SWF Version 8.
 * @property {9} FLASHVERSION9 - SWF Version 9.
*/
/** @type {FlashExportVersion} */
const FlashExportVersion = {
	FLASHVERSION1 : 1,
	FLASHVERSION2 : 2,
	FLASHVERSION3 : 3,
	FLASHVERSION4 : 4,
	FLASHVERSION5 : 5,
	FLASHVERSION6 : 6,
	FLASHVERSION7 : 7,
	FLASHVERSION8 : 8,
	FLASHVERSION9 : 9,
};

/**
 * @typedef {Object} FlashImageFormat -
 * @property {1} LOSSLESS -
 * @property {2} LOSSY -
*/
/** @type {FlashImageFormat} */
const FlashImageFormat = {
	LOSSLESS : 1,
	LOSSY : 2,
};

/**
 * @typedef {Object} LayerOrderType -
 * @property {1} BOTTOMUP -
 * @property {2} TOPDOWN -
*/
/** @type {LayerOrderType} */
const LayerOrderType = {
	BOTTOMUP : 1,
	TOPDOWN : 2,
};

/**
 * @typedef {Object} BlendAnimationType -
 * @property {2} INBUILD -
 * @property {1} INSEQUENCE -
 * @property {0} NOBLENDANIMATION - No blend animation.
*/
/** @type {BlendAnimationType} */
const BlendAnimationType = {
	INBUILD : 2,
	INSEQUENCE : 1,
	NOBLENDANIMATION : 0,
};

/**
 * @typedef {Object} FlashJPEGMethod -
 * @property {2} Optimized -
 * @property {1} Standard -
*/
/** @type {FlashJPEGMethod} */
const FlashJPEGMethod = {
	Optimized : 2,
	Standard : 1,
};

/**
 * @typedef {Object} FlashPlaybackSecurity -
 * @property {1} PlaybackLocal -
 * @property {2} PlaybackNetwork -
*/
/** @type {FlashPlaybackSecurity} */
const FlashPlaybackSecurity = {
	PlaybackLocal : 1,
	PlaybackNetwork : 2,
};

/**
 * @typedef {Object} VariableKind -
 * @property {5} GRAPH -
 * @property {4} IMAGE -
 * @property {3} TEXTUAL -
 * @property {1} Unknown -
 * @property {2} VISIBILITY -
*/
/** @type {VariableKind} */
const VariableKind = {
	GRAPH : 5,
	IMAGE : 4,
	TEXTUAL : 3,
	Unknown : 1,
	VISIBILITY : 2,
};

/**
 * @typedef {Object} AutoCADExportFileFormat -
 * @property {1} DWG -
 * @property {0} DXF -
*/
/** @type {AutoCADExportFileFormat} */
const AutoCADExportFileFormat = {
	DWG : 1,
	DXF : 0,
};

/**
 * @typedef {Object} AutoCADCompatibility -
 * @property {0} AutoCADRelease13 -
 * @property {1} AutoCADRelease14 -
 * @property {2} AutoCADRelease15 -
 * @property {3} AutoCADRelease18 -
 * @property {4} AutoCADRelease21 -
 * @property {5} AutoCADRelease24 -
*/
/** @type {AutoCADCompatibility} */
const AutoCADCompatibility = {
	AutoCADRelease13 : 0,
	AutoCADRelease14 : 1,
	AutoCADRelease15 : 2,
	AutoCADRelease18 : 3,
	AutoCADRelease21 : 4,
	AutoCADRelease24 : 5,
};

/**
 * @typedef {Object} AutoCADUnit -
 * @property {4} Centimeters -
 * @property {2} Inches -
 * @property {3} Millimeters -
 * @property {1} Picas -
 * @property {5} Pixels -
 * @property {0} Points -
*/
/** @type {AutoCADUnit} */
const AutoCADUnit = {
	Centimeters : 4,
	Inches : 2,
	Millimeters : 3,
	Picas : 1,
	Pixels : 5,
	Points : 0,
};

/**
 * @typedef {Object} AutoCADColors -
 * @property {1} Max16Colors -
 * @property {2} Max256Colors -
 * @property {0} Max8Colors -
 * @property {3} TrueColors -
*/
/** @type {AutoCADColors} */
const AutoCADColors = {
	Max16Colors : 1,
	Max256Colors : 2,
	Max8Colors : 0,
	TrueColors : 3,
};

/**
 * @typedef {Object} AutoCADRasterFormat -
 * @property {1} JPEG -
 * @property {0} PNG -
*/
/** @type {AutoCADRasterFormat} */
const AutoCADRasterFormat = {
	JPEG : 1,
	PNG : 0,
};

/**
 * @typedef {Object} AutoCADExportOption -
 * @property {1} MaximumEditability -
 * @property {0} PreserveAppearance -
*/
/** @type {AutoCADExportOption} */
const AutoCADExportOption = {
	MaximumEditability : 1,
	PreserveAppearance : 0,
};

/**
 * @typedef {Object} AutoCADGlobalScaleOption -
 * @property {1} FitArtboard -
 * @property {0} OriginalSize -
 * @property {2} ScaleByValue -
*/
/** @type {AutoCADGlobalScaleOption} */
const AutoCADGlobalScaleOption = {
	FitArtboard : 1,
	OriginalSize : 0,
	ScaleByValue : 2,
};

/**
 * @typedef {Object} TIFFByteOrder - Byte Order of TIFF file.
 * @property {0} IBMPC -
 * @property {1} MACINTOSH -
*/
/** @type {TIFFByteOrder} */
const TIFFByteOrder = {
	IBMPC : 0,
	MACINTOSH : 1,
};

/**
 * @typedef {Object} UserInteractionLevel - COM user interaction enumeration.
 * @property {2} DISPLAYALERTS -
 * @property {-1} DONTDISPLAYALERTS -
*/
/** @type {UserInteractionLevel} */
const UserInteractionLevel = {
	DISPLAYALERTS : 2,
	DONTDISPLAYALERTS : -1,
};

/**
 * @typedef {Object} PolarityValues -
 * @property {-1} NEGATIVE -
 * @property {1} POSITIVE -
*/
/** @type {PolarityValues} */
const PolarityValues = {
	NEGATIVE : -1,
	POSITIVE : 1,
};

/**
 * @typedef {Object} JavaScriptExecutionMode - When should a JavaScript debugger be shown.
 * @property {3} BeforeRunning - Show the JavaScript debugger at the first line of the JavaScript.
 * @property {2} OnRuntimeError - Show the JavaScript debugger is a runtime error occurs.
 * @property {1} never - Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.
*/
/** @type {JavaScriptExecutionMode} */
const JavaScriptExecutionMode = {
	BeforeRunning : 3,
	OnRuntimeError : 2,
	never : 1,
};

/**
 * @typedef {Object} PrintArtworkDesignation - The artwork layers/objects to be printed.
 * @property {2} ALLLAYERS - Print all layers.
 * @property {1} VISIBLELAYERS - Print visible layers.
 * @property {0} VISIBLEPRINTABLELAYERS - Print visible printable layers.
*/
/** @type {PrintArtworkDesignation} */
const PrintArtworkDesignation = {
	ALLLAYERS : 2,
	VISIBLELAYERS : 1,
	VISIBLEPRINTABLELAYERS : 0,
};

/**
 * @typedef {Object} PrintingBounds - The printing bounds type.
 * @property {0} ARTBOARDBOUNDS - Use artboard bounds.
 * @property {1} ARTWORKBOUNDS - Use artwork bounds.
 * @property {2} CROPBOUNDS - Use crop bounds.
*/
/** @type {PrintingBounds} */
const PrintingBounds = {
	ARTBOARDBOUNDS : 0,
	ARTWORKBOUNDS : 1,
	CROPBOUNDS : 2,
};

/**
 * @typedef {Object} PrintColorSeparationMode - The color separation mode.
 * @property {0} COMPOSITE - The composite mode.
 * @property {1} HOSTBASEDSEPARATION - The host based color separation mode.
 * @property {2} INRIPSEPARATION - The InRIP color separation mode.
*/
/** @type {PrintColorSeparationMode} */
const PrintColorSeparationMode = {
	COMPOSITE : 0,
	HOSTBASEDSEPARATION : 1,
	INRIPSEPARATION : 2,
};

/**
 * @typedef {Object} PrintOrientation - The artwork printing orientation.
 * @property {4} AUTOROTATE - Auto Rotate.
 * @property {1} LANDSCAPE - Landscape.
 * @property {0} PORTRAIT - Portrait.
 * @property {3} REVERSELANDSCAPE - Reverse landscape.
 * @property {2} REVERSEPORTRAIT - Reverse portrait.
*/
/** @type {PrintOrientation} */
const PrintOrientation = {
	AUTOROTATE : 4,
	LANDSCAPE : 1,
	PORTRAIT : 0,
	REVERSELANDSCAPE : 3,
	REVERSEPORTRAIT : 2,
};

/**
 * @typedef {Object} PrintPosition - The artwork printing position on media.
 * @property {8} TRANSLATEBOTTOM - Translate to the bottom center of media.
 * @property {7} TRANSLATEBOTTOMLEFT - Translate to the bottom left of media.
 * @property {9} TRANSLATEBOTTOMRIGHT - Translate to the bottom right of media.
 * @property {5} TRANSLATECENTER - Translate to the center of media.
 * @property {4} TRANSLATELEFT - Translate to the left center of media.
 * @property {6} TRANSLATERIGHT - Translate to the right center of media.
 * @property {2} TRANSLATETOP - Translate to the top center of media.
 * @property {1} TRANSLATETOPLEFT - Translate to the top left of media.
 * @property {3} TRANSLATETOPRIGHT - Translate to the top right of media.
*/
/** @type {PrintPosition} */
const PrintPosition = {
	TRANSLATEBOTTOM : 8,
	TRANSLATEBOTTOMLEFT : 7,
	TRANSLATEBOTTOMRIGHT : 9,
	TRANSLATECENTER : 5,
	TRANSLATELEFT : 4,
	TRANSLATERIGHT : 6,
	TRANSLATETOP : 2,
	TRANSLATETOPLEFT : 1,
	TRANSLATETOPRIGHT : 3,
};

/**
 * @typedef {Object} PrintTiling - The page tiling type.
 * @property {1} TILEFULLPAGES - Tile full pages.
 * @property {2} TILEIMAGEABLEAREAS - Tile imageable areas.
 * @property {0} TILESINGLEFULLPAGE - Tile single full page.
*/
/** @type {PrintTiling} */
const PrintTiling = {
	TILEFULLPAGES : 1,
	TILEIMAGEABLEAREAS : 2,
	TILESINGLEFULLPAGE : 0,
};

/**
 * @typedef {Object} PageMarksTypes - The page marks style type.
 * @property {1} Japanese - Japanese page marks style.
 * @property {0} Roman - Roman page marks style.
*/
/** @type {PageMarksTypes} */
const PageMarksTypes = {
	Japanese : 1,
	Roman : 0,
};

/**
 * @typedef {Object} PrintFontDownloadMode - The printer font download mode.
 * @property {2} DOWNLOADCOMPLETE - Download complete.
 * @property {0} DOWNLOADNONE - Download none.
 * @property {1} DOWNLOADSUBSET - Download subset.
*/
/** @type {PrintFontDownloadMode} */
const PrintFontDownloadMode = {
	DOWNLOADCOMPLETE : 2,
	DOWNLOADNONE : 0,
	DOWNLOADSUBSET : 1,
};

/**
 * @typedef {Object} FontSubstitutionPolicy - The font substitution policy.
 * @property {2} SUBSTITUTEDEVICE - Substitute device font.
 * @property {0} SUBSTITUTEOBLIQUE - Substitute oblique font.
 * @property {1} SUBSTITUTETINT - Substitute tint font.
*/
/** @type {FontSubstitutionPolicy} */
const FontSubstitutionPolicy = {
	SUBSTITUTEDEVICE : 2,
	SUBSTITUTEOBLIQUE : 0,
	SUBSTITUTETINT : 1,
};

/**
 * @typedef {Object} PostScriptImageCompressionType - The PostScript image compression type.
 * @property {0} IMAGECOMPRESSIONNONE - No image compression.
 * @property {2} JPEG - JPEG image compression.
 * @property {1} RLE - RLE image compression.
*/
/** @type {PostScriptImageCompressionType} */
const PostScriptImageCompressionType = {
	IMAGECOMPRESSIONNONE : 0,
	JPEG : 2,
	RLE : 1,
};

/**
 * @typedef {Object} PrintColorProfile - The color profile type.
 * @property {3} CUSTOMPROFILE - Use custom color profile.
 * @property {0} OLDSTYLEPROFILE - Use old style AI color profile.
 * @property {2} PRINTERPROFILE - Same as printer color profile.
 * @property {1} SOURCEPROFILE - Same as source color profile.
*/
/** @type {PrintColorProfile} */
const PrintColorProfile = {
	CUSTOMPROFILE : 3,
	OLDSTYLEPROFILE : 0,
	PRINTERPROFILE : 2,
	SOURCEPROFILE : 1,
};

/**
 * @typedef {Object} PrintColorIntent - The color intent type.
 * @property {3} ABSOLUTECOLORIMETRIC - Absolute colorimetric.
 * @property {0} PERCEPTUALINTENT - Perceptual color intent.
 * @property {2} RELATIVECOLORIMETRIC - Relative colorimetric.
 * @property {1} SATURATIONINTENT - Saturation color intent.
*/
/** @type {PrintColorIntent} */
const PrintColorIntent = {
	ABSOLUTECOLORIMETRIC : 3,
	PERCEPTUALINTENT : 0,
	RELATIVECOLORIMETRIC : 2,
	SATURATIONINTENT : 1,
};

/**
 * @typedef {Object} PrinterTypeEnum - The printer type.
 * @property {2} NONPOSTSCRIPTPRINTER - Non PostScript printer.
 * @property {1} POSTSCRIPTPRINTER - PostScript printer.
 * @property {0} Unknown - Unknown printer type.
*/
/** @type {PrinterTypeEnum} */
const PrinterTypeEnum = {
	NONPOSTSCRIPTPRINTER : 2,
	POSTSCRIPTPRINTER : 1,
	Unknown : 0,
};

/**
 * @typedef {Object} PrinterColorMode - The printer color mode.
 * @property {2} BLACKANDWHITEPRINTER - Black and white printer.
 * @property {0} COLORPRINTER - Color printer.
 * @property {1} GRAYSCALEPRINTER - Grayscale printer.
*/
/** @type {PrinterColorMode} */
const PrinterColorMode = {
	BLACKANDWHITEPRINTER : 2,
	COLORPRINTER : 0,
	GRAYSCALEPRINTER : 1,
};

/**
 * @typedef {Object} InkPrintStatus - The ink printing status.
 * @property {2} CONVERTINK - Convert to process color during print.
 * @property {0} DISABLEINK - Disable the ink during print.
 * @property {1} ENABLEINK - Enable the ink during print.
*/
/** @type {InkPrintStatus} */
const InkPrintStatus = {
	CONVERTINK : 2,
	DISABLEINK : 0,
	ENABLEINK : 1,
};

/**
 * @typedef {Object} InkType - The ink type.
 * @property {3} BLACKINK - Black color ink.
 * @property {4} CUSTOMINK - Custom color ink.
 * @property {0} CYANINK - Cyan color ink.
 * @property {1} MAGENTAINK - Magenta color ink.
 * @property {2} YELLOWINK - Yellow color ink.
*/
/** @type {InkType} */
const InkType = {
	BLACKINK : 3,
	CUSTOMINK : 4,
	CYANINK : 0,
	MAGENTAINK : 1,
	YELLOWINK : 2,
};

/**
 * @typedef {Object} TrappingType - The trapping type.
 * @property {3} IGNOREOPAQUE - Ignore opaque trapping type.
 * @property {0} NORMALTRAPPING - Normal trapping type.
 * @property {2} OPAQUE - Opaque trapping type.
 * @property {1} TRANSPARENT - Transparent trapping type.
*/
/** @type {TrappingType} */
const TrappingType = {
	IGNOREOPAQUE : 3,
	NORMALTRAPPING : 0,
	OPAQUE : 2,
	TRANSPARENT : 1,
};

/**
 * @typedef {Object} AutoKernType - The auto kern type.
 * @property {1} AUTO - Auto kerning.
 * @property {3} METRICSROMANONLY - Metrics roman only.
 * @property {0} NOAUTOKERN - No auto kerning.
 * @property {2} OPTICAL - Optical kerning.
*/
/** @type {AutoKernType} */
const AutoKernType = {
	AUTO : 1,
	METRICSROMANONLY : 3,
	NOAUTOKERN : 0,
	OPTICAL : 2,
};

/**
 * @typedef {Object} AutoLeadingType - The auto leading type.
 * @property {0} BOTTOMTOBOTTOM - Roman leading type.
 * @property {1} TOPTOTOP - Japanese leading type.
*/
/** @type {AutoLeadingType} */
const AutoLeadingType = {
	BOTTOMTOBOTTOM : 0,
	TOPTOTOP : 1,
};

/**
 * @typedef {Object} CaseChangeType - The case change type.
 * @property {1} LOWERCASE - Change to lower case.
 * @property {3} SENTENCECASE - Change to sentence case.
 * @property {2} TITLECASE - Change to title case.
 * @property {0} UPPERCASE - Change to upper case.
*/
/** @type {CaseChangeType} */
const CaseChangeType = {
	LOWERCASE : 1,
	SENTENCECASE : 3,
	TITLECASE : 2,
	UPPERCASE : 0,
};

/**
 * @typedef {Object} FontCapsOption - The font capitalization option.
 * @property {2} ALLCAPS - All caps.
 * @property {3} ALLSMALLCAPS - All small caps.
 * @property {0} NORMALCAPS - Normal caps.
 * @property {1} SMALLCAPS - Small caps.
*/
/** @type {FontCapsOption} */
const FontCapsOption = {
	ALLCAPS : 2,
	ALLSMALLCAPS : 3,
	NORMALCAPS : 0,
	SMALLCAPS : 1,
};

/**
 * @typedef {Object} FontBaselineOption - The font baseline option.
 * @property {0} NORMALBASELINE - Normal baseline.
 * @property {2} SUBSCRIPT - Fauxed subscript baseline.
 * @property {1} SUPERSCRIPT - Fauxed superscript baseline.
*/
/** @type {FontBaselineOption} */
const FontBaselineOption = {
	NORMALBASELINE : 0,
	SUBSCRIPT : 2,
	SUPERSCRIPT : 1,
};

/**
 * @typedef {Object} FontOpenTypePositionOption - The OpenType font position option.
 * @property {4} DENOMINATOR - OpenType denominator position.
 * @property {3} NUMERATOR - OpenType numerator position.
 * @property {0} OPENTYPEDEFAULT - Default position.
 * @property {2} OPENTYPESUBSCRIPT - OpenType subscript position.
 * @property {1} OPENTYPESUPERSCRIPT - OpenType superscript position.
*/
/** @type {FontOpenTypePositionOption} */
const FontOpenTypePositionOption = {
	DENOMINATOR : 4,
	NUMERATOR : 3,
	OPENTYPEDEFAULT : 0,
	OPENTYPESUBSCRIPT : 2,
	OPENTYPESUPERSCRIPT : 1,
};

/**
 * @typedef {Object} FigureStyleType - The figure style type.
 * @property {0} DEFAULTFIGURESTYLE - Default figure style.
 * @property {3} PROPORTIONAL - Proportional lining style.
 * @property {2} PROPORTIONALOLDSTYLE - Proportional oldstyle.
 * @property {1} TABULAR - Tabular lining style.
 * @property {4} TABULAROLDSTYLE - Tabular oldstyle.
*/
/** @type {FigureStyleType} */
const FigureStyleType = {
	DEFAULTFIGURESTYLE : 0,
	PROPORTIONAL : 3,
	PROPORTIONALOLDSTYLE : 2,
	TABULAR : 1,
	TABULAROLDSTYLE : 4,
};

/**
 * @typedef {Object} BaselineDirectionType - The baseline direction type.
 * @property {1} Standard -
 * @property {3} TateChuYoko -
 * @property {2} VerticalRotated -
*/
/** @type {BaselineDirectionType} */
const BaselineDirectionType = {
	Standard : 1,
	TateChuYoko : 3,
	VerticalRotated : 2,
};

/**
 * @typedef {Object} LanguageType - The language of text.
 * @property {39} ARABIC -
 * @property {51} BENGALIINDIA -
 * @property {8} BOKMALNORWEGIAN -
 * @property {11} BRAZILLIANPORTUGUESE -
 * @property {20} BULGARIAN -
 * @property {3} CANADIANFRENCH -
 * @property {17} CATALAN -
 * @property {29} CHINESE -
 * @property {22} CZECH -
 * @property {16} DANISH -
 * @property {15} DUTCH -
 * @property {43} DUTCH2005REFORM -
 * @property {0} ENGLISH -
 * @property {41} FARSI -
 * @property {1} FINNISH -
 * @property {42} GERMAN2006REFORM -
 * @property {25} GREEK -
 * @property {53} GUJARATI -
 * @property {49} HINDI -
 * @property {28} HUNGARIAN -
 * @property {27} ICELANDIC -
 * @property {7} ITALIAN -
 * @property {30} JAPANESE -
 * @property {57} KANNADA -
 * @property {58} MALAYALAM -
 * @property {50} MARATHI -
 * @property {9} NYNORSKNORWEGIAN - Nynorsk Norwegian.
 * @property {5} OLDGERMAN -
 * @property {54} ORIYA -
 * @property {23} POLISH -
 * @property {52} PUNJABI -
 * @property {24} RUMANIAN -
 * @property {18} RUSSIAN -
 * @property {21} SERBIAN -
 * @property {12} SPANISH -
 * @property {2} STANDARDFRENCH -
 * @property {4} STANDARDGERMAN -
 * @property {10} STANDARDPORTUGUESE -
 * @property {13} SWEDISH -
 * @property {6} SWISSGERMAN -
 * @property {44} SWISSGERMAN2006REFORM -
 * @property {55} TAMIL -
 * @property {56} TELUGU -
 * @property {26} TURKISH -
 * @property {14} UKENGLISH -
 * @property {19} UKRANIAN -
*/
/** @type {LanguageType} */
const LanguageType = {
	ARABIC : 39,
	BENGALIINDIA : 51,
	BOKMALNORWEGIAN : 8,
	BRAZILLIANPORTUGUESE : 11,
	BULGARIAN : 20,
	CANADIANFRENCH : 3,
	CATALAN : 17,
	CHINESE : 29,
	CZECH : 22,
	DANISH : 16,
	DUTCH : 15,
	DUTCH2005REFORM : 43,
	ENGLISH : 0,
	FARSI : 41,
	FINNISH : 1,
	GERMAN2006REFORM : 42,
	GREEK : 25,
	GUJARATI : 53,
	HINDI : 49,
	HUNGARIAN : 28,
	ICELANDIC : 27,
	ITALIAN : 7,
	JAPANESE : 30,
	KANNADA : 57,
	MALAYALAM : 58,
	MARATHI : 50,
	NYNORSKNORWEGIAN : 9,
	OLDGERMAN : 5,
	ORIYA : 54,
	POLISH : 23,
	PUNJABI : 52,
	RUMANIAN : 24,
	RUSSIAN : 18,
	SERBIAN : 21,
	SPANISH : 12,
	STANDARDFRENCH : 2,
	STANDARDGERMAN : 4,
	STANDARDPORTUGUESE : 10,
	SWEDISH : 13,
	SWISSGERMAN : 6,
	SWISSGERMAN2006REFORM : 44,
	TAMIL : 55,
	TELUGU : 56,
	TURKISH : 26,
	UKENGLISH : 14,
	UKRANIAN : 19,
};

/**
 * @typedef {Object} AlternateGlyphsForm - The alternate glyphs form of text.
 * @property {0} DEFAULTFORM -
 * @property {2} EXPERT -
 * @property {8} FULLWIDTH -
 * @property {5} HALFWIDTH -
 * @property {11} JIS04FORM -
 * @property {3} JIS78FORM -
 * @property {4} JIS83FORM -
 * @property {10} JIS90FORM -
 * @property {9} PROPORTIONALWIDTH -
 * @property {7} QUARTERWIDTH -
 * @property {6} THIRDWIDTH -
 * @property {1} TRADITIONAL -
*/
/** @type {AlternateGlyphsForm} */
const AlternateGlyphsForm = {
	DEFAULTFORM : 0,
	EXPERT : 2,
	FULLWIDTH : 8,
	HALFWIDTH : 5,
	JIS04FORM : 11,
	JIS78FORM : 3,
	JIS83FORM : 4,
	JIS90FORM : 10,
	PROPORTIONALWIDTH : 9,
	QUARTERWIDTH : 7,
	THIRDWIDTH : 6,
	TRADITIONAL : 1,
};

/**
 * @typedef {Object} StyleRunAlignmentType - The style run alignment.
 * @property {2} ROMANBASELINE -
 * @property {0} bottom -
 * @property {3} center -
 * @property {1} icfBottom -
 * @property {4} icfTop -
 * @property {5} top -
*/
/** @type {StyleRunAlignmentType} */
const StyleRunAlignmentType = {
	ROMANBASELINE : 2,
	bottom : 0,
	center : 3,
	icfBottom : 1,
	icfTop : 4,
	top : 5,
};

/**
 * @typedef {Object} WariChuJustificationType - The Wari-Chu alignment type.
 * @property {2} Center -
 * @property {0} Left -
 * @property {1} Right -
 * @property {7} WARICHUAUTOJUSTIFY -
 * @property {6} WARICHUFULLJUSTIFY -
 * @property {5} WARICHUFULLJUSTIFYLASTLINECENTER -
 * @property {3} WARICHUFULLJUSTIFYLASTLINELEFT -
 * @property {4} WARICHUFULLJUSTIFYLASTLINERIGHT -
*/
/** @type {WariChuJustificationType} */
const WariChuJustificationType = {
	Center : 2,
	Left : 0,
	Right : 1,
	WARICHUAUTOJUSTIFY : 7,
	WARICHUFULLJUSTIFY : 6,
	WARICHUFULLJUSTIFYLASTLINECENTER : 5,
	WARICHUFULLJUSTIFYLASTLINELEFT : 3,
	WARICHUFULLJUSTIFYLASTLINERIGHT : 4,
};

/**
 * @typedef {Object} BurasagariTypeEnum - The Burasagari type.
 * @property {2} Forced -
 * @property {0} None -
 * @property {1} Standard -
*/
/** @type {BurasagariTypeEnum} */
const BurasagariTypeEnum = {
	Forced : 2,
	None : 0,
	Standard : 1,
};

/**
 * @typedef {Object} KinsokuOrderEnum - The preferred Kinsoku order.
 * @property {0} PUSHIN -
 * @property {1} PUSHOUTFIRST -
 * @property {2} PUSHOUTONLY -
*/
/** @type {KinsokuOrderEnum} */
const KinsokuOrderEnum = {
	PUSHIN : 0,
	PUSHOUTFIRST : 1,
	PUSHOUTONLY : 2,
};

/**
 * @typedef {Object} PDFBoxType - Crop box.
 * @property {0} PDFARTBOX - Crop to ArtBox. The art box defines the extent of the page's meaningful content (including potential white space) as intended by the page's creator.
 * @property {3} PDFBLEEDBOX - Crop to BleedBox. The bleed box defines the region to which the contents of the page should be clipped when output in a production environment.
 * @property {5} PDFBOUNDINGBOX - Crop to Bounding Box. The bounding box is the rectangle that encloses all text, graphics, and images on the page.
 * @property {1} PDFCROPBOX - Crop to CropBox. The crop box is the region of the page to display and to print.
 * @property {4} PDFMEDIABOX - Crop to MediaBox. The media box is a natural size of the page. For example, the dimensions of A4 sheet of paper.
 * @property {2} PDFTRIMBOX - Crop to TrimBox. The trim box specifies the positioning of the page's content within the imposition.
*/
/** @type {PDFBoxType} */
const PDFBoxType = {
	PDFARTBOX : 0,
	PDFBLEEDBOX : 3,
	PDFBOUNDINGBOX : 5,
	PDFCROPBOX : 1,
	PDFMEDIABOX : 4,
	PDFTRIMBOX : 2,
};

/**
 * @typedef {Object} TracingMethodType - The tracing method: abutting and overlapping.
 * @property {0} TRACINGMETHODABUTTING - Tracing abutting method.
 * @property {1} TRACINGMETHODOVERLAPPING - Tracing overlapping method.
*/
/** @type {TracingMethodType} */
const TracingMethodType = {
	TRACINGMETHODABUTTING : 0,
	TRACINGMETHODOVERLAPPING : 1,
};

/**
 * @typedef {Object} TracingModeType - The tracing mode: color, grayscale, black and white.
 * @property {2} TRACINGMODEBLACKANDWHITE - Black and white tracing mode.
 * @property {0} TRACINGMODECOLOR - Color tracing mode.
 * @property {1} TRACINGMODEGRAY - Grayscale tracing mode.
*/
/** @type {TracingModeType} */
const TracingModeType = {
	TRACINGMODEBLACKANDWHITE : 2,
	TRACINGMODECOLOR : 0,
	TRACINGMODEGRAY : 1,
};

/**
 * @typedef {Object} TracingColorType - The input color type Full Color or Limited colors.
 * @property {1} TRACINGFULLCOLOR - Use Full colors for Tracing.
 * @property {0} TRACINGLIMITEDCOLOR - Use Limited colors for Tracing.
*/
/** @type {TracingColorType} */
const TracingColorType = {
	TRACINGFULLCOLOR : 1,
	TRACINGLIMITEDCOLOR : 0,
};

/**
 * @typedef {Object} ViewType - Controls the type of vector view.
 * @property {4} TRACINGVIEWIMAGE - View Source Image.
 * @property {2} TRACINGVIEWVECTOROUTLINES - View just the paths.
 * @property {1} TRACINGVIEWVECTOROUTLINESWITHTRACING - View paths and transparent fills.
 * @property {0} TRACINGVIEWVECTORTRACINGRESULT - View artwork.
 * @property {3} TRACINGVIEWVECTORWITHTRANSPARENTIMAGE - View Outlines with Transparent Image.
*/
/** @type {ViewType} */
const ViewType = {
	TRACINGVIEWIMAGE : 4,
	TRACINGVIEWVECTOROUTLINES : 2,
	TRACINGVIEWVECTOROUTLINESWITHTRACING : 1,
	TRACINGVIEWVECTORTRACINGRESULT : 0,
	TRACINGVIEWVECTORWITHTRANSPARENTIMAGE : 3,
};

/**
 * @typedef {Object} RasterizationColorModel - Controls the color model for the rasterization.
 * @property {3} BITMAP - Rasterize as 1-bit bitmap.
 * @property {1} DEFAULTCOLORMODEL - Rasterize in the default document color space.
 * @property {2} GRAYSCALE - Rasterize as grayscale image.
*/
/** @type {RasterizationColorModel} */
const RasterizationColorModel = {
	BITMAP : 3,
	DEFAULTCOLORMODEL : 1,
	GRAYSCALE : 2,
};

/**
 * @typedef {Object} AntiAliasingMethod - Controls the type of antialiasing method used in the rasterization.
 * @property {1} ARTOPTIMIZED - Optimize for the art object.
 * @property {0} None - No anti-aliasing allowed.
 * @property {2} TYPEOPTIMIZED - Optimize for the type object.
*/
/** @type {AntiAliasingMethod} */
const AntiAliasingMethod = {
	ARTOPTIMIZED : 1,
	None : 0,
	TYPEOPTIMIZED : 2,
};

/**
 * @typedef {Object} ColorConvertPurpose - Denotes the purpose of color conversion using ConvertSmapleColor method.
 * @property {0} defaultpurpose - Do standard conversion, without black preservation.
 * @property {4} dummypurpose - Dummy option.
 * @property {2} exportpurpose - Conversion options appropriate to creating an image for print or export.
 * @property {1} previewpurpose - Conversion options appropriate to creating an image for screen display.
*/
/** @type {ColorConvertPurpose} */
const ColorConvertPurpose = {
	defaultpurpose : 0,
	dummypurpose : 4,
	exportpurpose : 2,
	previewpurpose : 1,
};

/**
 * @typedef {Object} FXGVersion - The FXG file format version.
 * @property {1} VERSION1PT0 - FXG version 1.0.
 * @property {2} VERSION2PT0 - FXG version 2.0.
*/
/** @type {FXGVersion} */
const FXGVersion = {
	VERSION1PT0 : 1,
	VERSION2PT0 : 2,
};

/**
 * @typedef {Object} FiltersPreservePolicy - Filters preserve policy used by FXG file format.
 * @property {1} EXPANDFILTERS - Preserve the appearance of filters by expanding it.
 * @property {3} KEEPFILTERSEDITABLE - Preserve the editability of filters.
 * @property {2} RASTERIZEFILTERS - Preserve the appearance of filters by rasterizing it.
*/
/** @type {FiltersPreservePolicy} */
const FiltersPreservePolicy = {
	EXPANDFILTERS : 1,
	KEEPFILTERSEDITABLE : 3,
	RASTERIZEFILTERS : 2,
};

/**
 * @typedef {Object} TextPreservePolicy - Text preserve policy used by FXG file format.
 * @property {4} AUTOMATICALLYCONVERTTEXT - Automatically convert text.
 * @property {3} KEEPTEXTEDITABLE - Preserve the editability of text.
 * @property {1} OUTLINETEXT - Preserve the appearance of text by outlining it.
 * @property {2} RASTERIZETEXT - Preserve the appearance of text by rasterizing it.
*/
/** @type {TextPreservePolicy} */
const TextPreservePolicy = {
	AUTOMATICALLYCONVERTTEXT : 4,
	KEEPTEXTEDITABLE : 3,
	OUTLINETEXT : 1,
	RASTERIZETEXT : 2,
};

/**
 * @typedef {Object} GradientsPreservePolicy - Gradients preserve policy used by FXG file format.
 * @property {4} AUTOMATICALLYCONVERTGRADIENTS - Automatically Convert Gradients.
 * @property {3} KEEPGRADIENTSEDITABLE - Preserve the editability of gradients.
*/
/** @type {GradientsPreservePolicy} */
const GradientsPreservePolicy = {
	AUTOMATICALLYCONVERTGRADIENTS : 4,
	KEEPGRADIENTSEDITABLE : 3,
};

/**
 * @typedef {Object} BlendsExpandPolicy - Blends Expand policy used by FXG file format.
 * @property {1} AUTOMATICALLYCONVERTBLENDS - Automatically Convert Blends.
 * @property {2} RASTERIZEBLENDS - Expand Blends by Rasterizing.
*/
/** @type {BlendsExpandPolicy} */
const BlendsExpandPolicy = {
	AUTOMATICALLYCONVERTBLENDS : 1,
	RASTERIZEBLENDS : 2,
};

/**
 * @typedef {Object} CoordinateSystem - Coordinate system used by Illustrator.
 * @property {1} ARTBOARDCOORDINATESYSTEM - Artboard coordinate system.
 * @property {0} DOCUMENTCOORDINATESYSTEM - AiDocument coordinate system.
*/
/** @type {CoordinateSystem} */
const CoordinateSystem = {
	ARTBOARDCOORDINATESYSTEM : 1,
	DOCUMENTCOORDINATESYSTEM : 0,
};

/**
 * @typedef {Object} SymbolRegistrationPoint - The symbol registration point.
 * @property {7} SYMBOLBOTTOMLEFTPOINT - Bottom left point of symbol bounding box.
 * @property {8} SYMBOLBOTTOMMIDDLEPOINT - Bottom middle point of symbol bounding box.
 * @property {9} SYMBOLBOTTOMRIGHTPOINT - Bottom right point of symbol bounding box.
 * @property {5} SYMBOLCENTERPOINT - Center point of symbol bounding box.
 * @property {4} SYMBOLMIDDLELEFTPOINT - Middle left point of symbol bounding box.
 * @property {6} SYMBOLMIDDLERIGHTPOINT - Middle right point of symbol bounding box.
 * @property {1} SYMBOLTOPLEFTPOINT - Top left point of symbol bounding box.
 * @property {2} SYMBOLTOPMIDDLEPOINT - Top middle point of symbol bounding box.
 * @property {3} SYMBOLTOPRIGHTPOINT - Top right point of symbol bounding box.
*/
/** @type {SymbolRegistrationPoint} */
const SymbolRegistrationPoint = {
	SYMBOLBOTTOMLEFTPOINT : 7,
	SYMBOLBOTTOMMIDDLEPOINT : 8,
	SYMBOLBOTTOMRIGHTPOINT : 9,
	SYMBOLCENTERPOINT : 5,
	SYMBOLMIDDLELEFTPOINT : 4,
	SYMBOLMIDDLERIGHTPOINT : 6,
	SYMBOLTOPLEFTPOINT : 1,
	SYMBOLTOPMIDDLEPOINT : 2,
	SYMBOLTOPRIGHTPOINT : 3,
};

/**
 * @typedef {Object} PerspectiveGridPlaneType - Perspective grid plane types.
 * @property {3} FLOORPLANE - Perspective Grid Floor Plane Type.
 * @property {1} LEFTPLANE - Perspective Grid Left Plane Type.
 * @property {0} NOPLANE - Invalid Perspective Grid Plane Type.
 * @property {2} RIGHTPLANE - Perspective Grid Right Plane Type.
*/
/** @type {PerspectiveGridPlaneType} */
const PerspectiveGridPlaneType = {
	FLOORPLANE : 3,
	LEFTPLANE : 1,
	NOPLANE : 0,
	RIGHTPLANE : 2,
};

/**
 * @typedef {Object} FirstBaselineType - Text Item First baseline types.
 * @property {0} BASELINEASCENT - First Baseline Ascent Type.
 * @property {1} BASELINECAPHEIGHT - First baseline Cap Height Type.
 * @property {4} BASELINEEMBOXHEIGHT - First Baseline Em Box Height Type.
 * @property {5} BASELINEFIXED - First Baseline Fixed Type.
 * @property {2} BASELINELEADING - First Baseline Leading Type.
 * @property {6} BASELINELEGACY - First Baseline Legacy Type.
 * @property {3} BASELINEXHEIGHT - First Baseline x Height Type.
*/
/** @type {FirstBaselineType} */
const FirstBaselineType = {
	BASELINEASCENT : 0,
	BASELINECAPHEIGHT : 1,
	BASELINEEMBOXHEIGHT : 4,
	BASELINEFIXED : 5,
	BASELINELEADING : 2,
	BASELINELEGACY : 6,
	BASELINEXHEIGHT : 3,
};

/**
 * @typedef {Object} DocumentLayoutStyle - AiDocument layout style types.
 * @property {0} CASCADE - Arranges document in cascaded style.
 * @property {4} CONSOLIDATEALL - Consolidates all documents.
 * @property {3} FLOATALL - Arranges all documents floating layout.
 * @property {1} HORIZONTALTILE - Arranges documents as horizontal tiles.
 * @property {2} VERTICALTILE - Arranges documents as vertical tiles.
*/
/** @type {DocumentLayoutStyle} */
const DocumentLayoutStyle = {
	CASCADE : 0,
	CONSOLIDATEALL : 4,
	FLOATALL : 3,
	HORIZONTALTILE : 1,
	VERTICALTILE : 2,
};

/**
 * A collection of artboards.
 * @name ArtboardsJSDocType
 * @class
 */
class ArtboardsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Add artboard object.
   * @param {Rect} artboardRect - Size and position of artboard.
   * @returns {Artboard}
   */
  add = function (artboardRect) {};
  /**
   * Retrieves the index position of the active artboard in the document's list.
   * @returns {number}
   */
  getActiveArtboardIndex = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Artboard}
   */
  getByName = function (name) {};
  /**
   * Get the first Artboard with specified name.
   * @param {string} artboardName - The name of the artboard.
   * @returns {Artboard}
   */
  getByName = function (artboardName) {};
  /**
   * Insert an Artboard at specified location.
   * @param {Rect} artboardRect - Size and position of artboard.
   * @param {number} index - Index position where artboard should be inserted.
   * @returns {void}
   */
  insert = function (artboardRect, index) {};
  /**
   * Delete artboard object.
   * @param {number} index - Index of the crop area to be deleted.
   * @returns {void}
   */
  remove = function (index) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
  /**
   * Makes a specific artboard active, and makes it current in the iteration order.
   * @param {number} index - The 0-based index position of the artboard in the document list.
   * @returns {void}
   */
  setActiveArtboardIndex = function (index) {};
}

/**
 * @typedef {Array<Artboard> & ArtboardsJSDocType} Artboards
*/

/**
 * A collection of documents.
 * @name DocumentsJSDocType
 * @class
 */
class DocumentsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * A document.
   * @param {DocumentColorSpace} [documentColorSpace] - The color model used for the document.
   * @param {number} [width] - Width of the artboard.
   * @param {number} [height] - Height of the artboard.
   * @param {number} [numArtboards] - Number of artboards for new document.Range (1:100).
   * @param {DocumentArtboardLayout} [artboardLayout] - Layout of artboards for new document.
   * @param {number} [artboardSpacing] - Spacing between artboards for new document.
   * @param {number} [artboardRowsOrCols] - Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
   * @returns {AiDocument}
   */
  add = function (documentColorSpace, width, height, numArtboards, artboardLayout, artboardSpacing, artboardRowsOrCols) {};
  /**
   * Create a new document from a preset.
   * @param {string} startupPreset - The name of a startup document preset.
   * @param {DocumentPreset} [presetSettings] - Custom settings to apply to the preset.
   * @param {boolean} [showOptionsDialog] - If false, do not show Options dialog.
   * @returns {AiDocument}
   */
  addDocument = function (startupPreset, presetSettings, showOptionsDialog) {};
  /**
   * Create a document from the preset with option to throw dialog to customize present settings.
   * @param {string} startupPreset - The name of startup document preset.
   * @param {boolean} [showOptionsDialog] - Argument controls if options Dialog is shown or not.
   * @returns {AiDocument}
   */
  addDocumentWithDialogOption = function (startupPreset, showOptionsDialog) {};
  /**
   * Arranges the documents in the specified style.
   * @param {DocumentLayoutStyle} layoutStyle - The document layout style.
   * @returns {boolean}
   */
  arrange = function (layoutStyle) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {AiDocument}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<AiDocument> & DocumentsJSDocType} Documents
*/

/**
 * A collection of layers.
 * @name LayersJSDocType
 * @class
 */
class LayersJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a layer.
   * @returns {Layer}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Layer}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<Layer> & LayersJSDocType} Layers
*/

/**
 * A collection of group items.
 * @name GroupItemsJSDocType
 * @class
 */
class GroupItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a group item.
   * @returns {GroupItem}
   */
  add = function () {};
  /**
   * Create a group item from a vector graphics file.
   * @param {File} imageFile - The vector graphics file to be embedded.
   * @returns {GroupItem}
   */
  createFromFile = function (imageFile) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {GroupItem}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<GroupItem> & GroupItemsJSDocType} GroupItems
*/

/**
 * A collection of page items.
 * @name PageItemsJSDocType
 * @class
 */
class PageItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {PageItem}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<PageItem> & PageItemsJSDocType} PageItems
*/

/**
 * A collection of path items.
 * @name PathItemsJSDocType
 * @class
 */
class PathItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a path.
   * @returns {PathItem}
   */
  add = function () {};
  /**
   * Create an elliptical path item.
   * @param {number} [top] - The ellipse's bounds.
   * @param {number} [left] - The ellipse's bounds.
   * @param {number} [width] - The ellipse's bounds.
   * @param {number} [height] - The height of the ellipse.
   * @param {boolean} [reversed] - Is the ellipse path reversed?
   * @param {boolean} [inscribed] - Is the ellipse path inscribed?
   * @returns {PathItem}
   */
  ellipse = function (top, left, width, height, reversed, inscribed) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {PathItem}
   */
  getByName = function (name) {};
  /**
   * Used to create a regular polygon path item. Not for path item access.
   * @param centerX
   * @param centerY
   * @param {number} [radius] - The radius of the polygon points.
   * @param {number} [sides] - The number of sides on the polygon.
   * @param {boolean} [reversed] - Is the polygon path reversed?
   * @returns {PathItem}
   */
  polygon = function (centerX, centerY, radius, sides, reversed) {};
  /**
   * Used to create a rectangular path item. Not for path item access.
   * @param {number} top - The top coordinate of the rectangle's bounds.
   * @param {number} left - The left coordinate of the rectangle's bounds.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @param {boolean} [reversed] - Is the rectangle path reversed?
   * @returns {PathItem}
   */
  rectangle = function (top, left, width, height, reversed) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
  /**
   * Used to create a rounded-corner rectangular path item. Not for path item access.
   * @param top
   * @param left
   * @param width
   * @param height
   * @param {number} [horizontalRadius] - Horizontal corner radius.
   * @param {number} [verticalRadius] - Vertical corner radius.
   * @param {boolean} [reversed] - Is the rectangle path reversed?
   * @returns {PathItem}
   */
  roundedRectangle = function (top, left, width, height, horizontalRadius, verticalRadius, reversed) {};
  /**
   * Used to create a star-shaped path item. Not for path item access.
   * @param centerX
   * @param centerY
   * @param {number} [radius] - The outside radius of the star points.
   * @param {number} [innerRadius] - The inside radius of the star points.
   * @param {number} [points] - The number of points on the star.
   * @param {boolean} [reversed] - Is the star path reversed?
   * @returns {PathItem}
   */
  star = function (centerX, centerY, radius, innerRadius, points, reversed) {};
}

/**
 * @typedef {Array<PathItem> & PathItemsJSDocType} PathItems
*/

/**
 * A collection of path points.
 * @name PathPointsJSDocType
 * @class
 */
class PathPointsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a path point.
   * @returns {PathPoint}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {PathPoint}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<PathPoint> & PathPointsJSDocType} PathPoints
*/

/**
 * A collection of compound path items.
 * @name CompoundPathItemsJSDocType
 * @class
 */
class CompoundPathItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a compound path item.
   * @returns {CompoundPathItem}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {CompoundPathItem}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<CompoundPathItem> & CompoundPathItemsJSDocType} CompoundPathItems
*/

/**
 * A collection of stories.
 * @name StoriesJSDocType
 * @class
 */
class StoriesJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Story}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<Story> & StoriesJSDocType} Stories
*/

/**
 * A collection of text frame items.
 * @name TextFrameItemsJSDocType
 * @class
 */
class TextFrameItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a point text frame item.
   * @returns {TextFrame}
   */
  add = function () {};
  /**
   * Create an area text frame item.
   * @param {PathItem} textPath - The path item associated with the text frame.
   * @param {TextOrientation} [orientation] - The orientation of the text.
   * @param {TextFrame} [baseFrame] - The base text frame if it has one.
   * @param {boolean} [postFix] - Whether to postfix/prefix the new text frame to the specified base text frame.
   * @returns {TextFrame}
   */
  areaText = function (textPath, orientation, baseFrame, postFix) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {TextFrame}
   */
  getByName = function (name) {};
  /**
   * Create an on-path text frame item.
   * @param {PathItem} textPath - The path item associated with the text frame.
   * @param {number} [startTValue] - The start position of text along a path, as a value relative to the path's segments (path text only)
   * @param {number} [endTValue] - The end position of text along a path, as a value relative to the path's segments (path text only)
   * @param {TextOrientation} [orientation] - The orientation of the text.
   * @param {TextFrame} [baseFrame] - The base text frame if it has one.
   * @param {boolean} [postFix] - Whether to postfix/prefix the new text frame to the specified base text frame.
   * @returns {TextFrame}
   */
  pathText = function (textPath, startTValue, endTValue, orientation, baseFrame, postFix) {};
  /**
   * Create a point text frame item.
   * @param {Point | [number,number]} anchor - The position (coordinates) of the anchor point.
   * @param {TextOrientation} [orientation] - The orientation of the text.
   * @returns {TextFrame}
   */
  pointText = function (anchor, orientation) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<TextFrame> & TextFrameItemsJSDocType} TextFrameItems
*/

/**
 * A collection of legacy text items.
 * @name LegacyTextItemsJSDocType
 * @class
 */
class LegacyTextItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create text frames from all legacy text items. The original legacy text items will be deleted.
   * @returns {boolean}
   */
  convertToNative = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {LegacyTextItem}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<LegacyTextItem> & LegacyTextItemsJSDocType} LegacyTextItems
*/

/**
 * A collection of text range items.
 * @name TextRangesJSDocType
 * @class
 */
class TextRangesJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {TextRange}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<TextRange> & TextRangesJSDocType} TextRanges
*/

/**
 * A collection of insertion points.
 * @name InsertionPointsJSDocType
 * @class
 */
class InsertionPointsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {InsertionPoint}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<InsertionPoint> & InsertionPointsJSDocType} InsertionPoints
*/

/**
 * A collection of characters.
 * @name CharactersJSDocType
 * @class
 */
class CharactersJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a character.
   * @param {string} contents - The text string.
   * @returns {TextRange}
   */
  add = function (contents) {};
  /**
   *
   * @param {string} contents - The text string.
   * @returns {TextRange}
   */
  addBefore = function (contents) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {TextRange}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<TextRange> & CharactersJSDocType} Characters
*/

/**
 * A collection of words.
 * @name WordsJSDocType
 * @class
 */
class WordsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a word.
   * @param {string} contents - The text string.
   * @returns {TextRange}
   */
  add = function (contents) {};
  /**
   *
   * @param {string} contents - The text string.
   * @returns {TextRange}
   */
  addBefore = function (contents) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {TextRange}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<TextRange> & WordsJSDocType} Words
*/

/**
 * A collection of lines.
 * @name LinesJSDocType
 * @class
 */
class LinesJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {TextRange}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<TextRange> & LinesJSDocType} Lines
*/

/**
 * A collection of Paragraphs.
 * @name ParagraphsJSDocType
 * @class
 */
class ParagraphsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a text art item.
   * @param {string} contents - The text string.
   * @returns {TextRange}
   */
  add = function (contents) {};
  /**
   *
   * @param {string} contents - The text string.
   * @returns {TextRange}
   */
  addBefore = function (contents) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {TextRange}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<TextRange> & ParagraphsJSDocType} Paragraphs
*/

/**
 * A collection of character styles.
 * @name CharacterStylesJSDocType
 * @class
 */
class CharacterStylesJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a named character style.
   * @param {string} name - The character style name.
   * @returns {CharacterStyle}
   */
  add = function (name) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {CharacterStyle}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<CharacterStyle> & CharacterStylesJSDocType} CharacterStyles
*/

/**
 * A collection of paragraph styles.
 * @name ParagraphStylesJSDocType
 * @class
 */
class ParagraphStylesJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a named paragraph style.
   * @param {string} name - The paragraph style name.
   * @returns {ParagraphStyle}
   */
  add = function (name) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {ParagraphStyle}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<ParagraphStyle> & ParagraphStylesJSDocType} ParagraphStyles
*/

/**
 * A collection of custom spot colors.
 * @name SpotsJSDocType
 * @class
 */
class SpotsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a spot color.
   * @returns {Spot}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Spot}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<Spot> & SpotsJSDocType} Spots
*/

/**
 * A collection of swatches.
 * @name SwatchesJSDocType
 * @class
 */
class SwatchesJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a swatch.
   * @returns {Swatch}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Swatch}
   */
  getByName = function (name) {};
  /**
   * Get selected swatches in the document.
   * @param {boolean} [includeSwatchInGroup] - The selected element should include swatches in group.
   * @returns {Swatch[]}
   */
  getSelected = function (includeSwatchInGroup) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<Swatch> & SwatchesJSDocType} Swatches
*/

/**
 * A collection of Swatch groups.
 * @name SwatchGroupsJSDocType
 * @class
 */
class SwatchGroupsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a Swatch group.
   * @returns {SwatchGroup}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {SwatchGroup}
   */
  getByName = function (name) {};
  /**
   * Get selected swatchGroups in the document.
   * @returns {SwatchGroup[]}
   */
  getSelected = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<SwatchGroup> & SwatchGroupsJSDocType} SwatchGroups
*/

/**
 * A collection of gradients.
 * @name GradientsJSDocType
 * @class
 */
class GradientsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a gradient.
   * @returns {Gradient}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Gradient}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<Gradient> & GradientsJSDocType} Gradients
*/

/**
 * A collection of gradient stops.
 * @name GradientStopsJSDocType
 * @class
 */
class GradientStopsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a gradient stop.
   * @returns {GradientStop}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {GradientStop}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<GradientStop> & GradientStopsJSDocType} GradientStops
*/

/**
 * A collection of patterns.
 * @name PatternsJSDocType
 * @class
 */
class PatternsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a pattern.
   * @returns {Pattern}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Pattern}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<Pattern> & PatternsJSDocType} Patterns
*/

/**
 * A collection of symbols.
 * @name SymbolsJSDocType
 * @class
 */
class SymbolsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a symbol.
   * @param {PageItem} sourceArt - The art item from which to make this symbol.
   * @param {SymbolRegistrationPoint} [registrationPoint] - The symbol registration point.
   * @returns {Symbol}
   */
  add = function (sourceArt, registrationPoint) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Symbol}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<Symbol> & SymbolsJSDocType} Symbols
*/

/**
 * A collection of symbol items.
 * @name SymbolItemsJSDocType
 * @class
 */
class SymbolItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * An instance of a symbol item.
   * @param {Symbol} symbol - The symbol to make an instance of.
   * @returns {SymbolItem}
   */
  add = function (symbol) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {SymbolItem}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<SymbolItem> & SymbolItemsJSDocType} SymbolItems
*/

/**
 * A collection of brushes.
 * @name BrushesJSDocType
 * @class
 */
class BrushesJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a brush.
   * @param {File} brushDefinition - The brush definition from which the brush would be created.
   * @param {string} [brushName] - The name of the brush.
   * @returns {Brush}
   */
  add = function (brushDefinition, brushName) {};
  /**
   * Create a brush, select the brush tool and load the created brush in the brush tool.
   * @param {File} brushDefinition - The brush definition from which the brush would be created.
   * @returns {Brush}
   */
  addAndLoad = function (brushDefinition) {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Brush}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<Brush> & BrushesJSDocType} Brushes
*/

/**
 * A collection of art styles.
 * @name ArtStylesJSDocType
 * @class
 */
class ArtStylesJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {ArtStyle}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<ArtStyle> & ArtStylesJSDocType} ArtStyles
*/

/**
 * A collection of fonts.
 * @name TextFontsJSDocType
 * @class
 */
class TextFontsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {TextFont}
   */
  getByName = function (name) {};
  /**
   * Returns the current font name.
   * @returns {string}
   */
  getCurrentFont = function () {};
  /**
   * Get the Text Font with the font name , if not avaiable it will create the substitute font.
   * @param {string} fontName - The name of the font to find or create substitute.
   * @returns {TextFont}
   */
  getFontByName = function (fontName) {};
  /**
   * Check if any original font is present with the given name.
   * @param {string} fontName - The name of the font to find.
   * @returns {boolean}
   */
  isFontAvailable = function (fontName) {};
}

/**
 * @typedef {Array<TextFont> & TextFontsJSDocType} TextFonts
*/

/**
 * The collection of tags associated with a page item.
 * @name TagsJSDocType
 * @class
 */
class TagsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a tag.
   * @returns {Tag}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Tag}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<Tag> & TagsJSDocType} Tags
*/

/**
 * A collection of RasterItems.
 * @name RasterItemsJSDocType
 * @class
 */
class RasterItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {RasterItem}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<RasterItem> & RasterItemsJSDocType} RasterItems
*/

/**
 * A collection of PlacedItems.
 * @name PlacedItemsJSDocType
 * @class
 */
class PlacedItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a placed item.
   * @returns {PlacedItem}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {PlacedItem}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<PlacedItem> & PlacedItemsJSDocType} PlacedItems
*/

/**
 * EmbeddedItems Collection.
 * @name EmbeddedItemsJSDocType
 * @class
 */
class EmbeddedItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create an embedded item.
   * @returns {EmbedItem}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {EmbedItem}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<EmbedItem> & EmbeddedItemsJSDocType} EmbeddedItems
*/

/**
 * A collection of MeshItems.
 * @name MeshItemsJSDocType
 * @class
 */
class MeshItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {MeshItem}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<MeshItem> & MeshItemsJSDocType} MeshItems
*/

/**
 * A collection of GraphItems.
 * @name GraphItemsJSDocType
 * @class
 */
class GraphItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {GraphItem}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<GraphItem> & GraphItemsJSDocType} GraphItems
*/

/**
 * A collection of PluginItems.
 * @name PluginItemsJSDocType
 * @class
 */
class PluginItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {PluginItem}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<PluginItem> & PluginItemsJSDocType} PluginItems
*/

/**
 * A collection of NonNativeItems.
 * @name NonNativeItemsJSDocType
 * @class
 */
class NonNativeItemsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {NonNativeItem}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<NonNativeItem> & NonNativeItemsJSDocType} NonNativeItems
*/

/**
 * A collection of views.
 * @name ViewsJSDocType
 * @class
 */
class ViewsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {View}
   */
  getByName = function (name) {};
}

/**
 * @typedef {Array<View> & ViewsJSDocType} Views
*/

/**
 * A collection of variables.
 * @name VariablesJSDocType
 * @class
 */
class VariablesJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a variable.
   * @returns {Variable}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {Variable}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<Variable> & VariablesJSDocType} Variables
*/

/**
 * A collection of datasets.
 * @name DataSetsJSDocType
 * @class
 */
class DataSetsJSDocType {
  /** @readonly @type {number} - Number of elements in the collection. */
  length;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Create a data set.
   * @returns {DataSet}
   */
  add = function () {};
  /**
   * Get the first element in the collection with the provided name.
   * @param name
   * @returns {DataSet}
   */
  getByName = function (name) {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * @typedef {Array<DataSet> & DataSetsJSDocType} DataSets
*/

/**
 * Options which may be supplied when opening a file.
 * @name OpenOptions
 * @class
 */
class OpenOptions {
  /** @static @type {boolean} - Add this file to the list of recently opened files. */
  addToRecentFiles;
  /** @static @type {boolean} - Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded. */
  convertCropAreaToArtboard;
  /** @static @type {boolean} - Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. */
  convertTilesToArtboard;
  /** @static @type {boolean} - Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later. */
  createArtboardWithArtworkBoundingBox;
  /** @static @type {LibraryType} - Open the file as library. */
  openAs;
  /** @static @type {boolean} - Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later. */
  preserveLegacyArtboard;
  /** @static @type {boolean} - Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3) */
  updateLegacyGradientMesh;
  /** @static @type {boolean} - Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11) */
  updateLegacyText;
}

/**
 * Options which may be supplied when saving a document as an FXG file.
 * @name FXGSaveOptions
 * @class
 */
class FXGSaveOptions {
  /** @static @type {string} - If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
  artboardRange;
  /** @static @type {BlendsExpandPolicy} - The policy used by FXG to expand blends. */
  blendsPolicy;
  /** @static @type {boolean} - Choose to downsample the linked images(72ppi) */
  downsampleLinkedImages;
  /** @static @type {FiltersPreservePolicy} - The policy used by FXG to preserve filters. */
  filtersPolicy;
  /** @static @type {GradientsPreservePolicy} - The policy used by FXG to preserve gradients. */
  gradientsPolicy;
  /** @static @type {boolean} - Choose to include metadata (XMP) */
  includeMetadata;
  /** @static @type {boolean} - Choose to include unused symbols. */
  includeUnusedSymbols;
  /** @static @type {boolean} - Choose to preserve the editing capabilities of FXG. */
  preserveEditingCapabilities;
  /** @static @type {boolean} - All the artboards or range of the artboards will be saved. */
  saveMultipleArtboards;
  /** @static @type {TextPreservePolicy} - The policy used by FXG to preserve text. */
  textPolicy;
  /** @static @type {FXGVersion} - The version of the FXG file format to create. */
  version;
}

/**
 * Options which may be supplied when saving a document as an Illustrator EPS file.
 * @name EPSSaveOptions
 * @class
 */
class EPSSaveOptions {
  /** @static @type {string} - If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
  artboardRange;
  /** @static @type {boolean} - Use CMYK PostScript. */
  cmykPostScript;
  /** @static @type {Compatibility} - What Illustrator file format version to create. */
  compatibility;
  /** @static @type {boolean} - Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object. */
  compatibleGradientPrinting;
  /** @static @type {boolean} - Embed all fonts used by the document in the saved file (version 7 or later) */
  embedAllFonts;
  /** @static @type {boolean} - Are linked image files to be included in the saved document. */
  embedLinkedFiles;
  /** @static @type {OutputFlattening} - How should transparency be flattened for older file format versions (pre-version 9) */
  flattenOutput;
  /** @static @type {boolean} - Include thumbnail image of the EPS artwork. */
  includeDocumentThumbnails;
  /** @static @type {PDFOverprint} - */
  overprint;
  /** @static @type {EPSPostScriptLevelEnum} - PostScript level to use (level 1 valid for file format version 8 or older) */
  postScript;
  /** @static @type {EPSPreview} - EPS preview format. */
  preview;
  /** @static @type {boolean} - All the artboards or range of the artboards will be saved. */
  saveMultipleArtboards;
}

/**
 * Options which may be supplied when saving a document as a PDF file.
 * @name PDFSaveOptions
 * @class
 */
class PDFSaveOptions {
  /** @static @type {boolean} - Create acrobat layers from top-level layers - acrobat 6 only option. */
  acrobatLayers;
  /** @static @type {string} - Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
  artboardRange;
  /** @static @type {boolean} - Link 4 bleed values. */
  bleedLink;
  /** @static @type {Rect} - The bleed offset rect. */
  bleedOffsetRect;
  /** @static @type {boolean} - Draw color bars. */
  colorBars;
  /** @static @type {CompressionQuality} - How should color bitmap images be compressed. */
  colorCompression;
  /** @static @type {ColorConversion} - PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination. */
  colorConversionID;
  /** @static @type {ColorDestination} - When NoColorConversion is specified for Color Conversion, NoColorDestination is set. */
  colorDestinationID;
  /** @static @type {number} - If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to. */
  colorDownsampling;
  /** @static @type {number} - Downsample if the image's resolution is above this value. */
  colorDownsamplingImageThreshold;
  /** @static @type {DownsampleMethod} - How should color bitmap images be resampled. */
  colorDownsamplingMethod;
  /** @static @type {ColorProfile} - If CMS is off, Don't Include Profiles is set. */
  colorProfileID;
  /** @static @type {number} - Tile size when compressing with JPEG2000. */
  colorTileSize;
  /** @static @type {PDFCompatibility} - The version of the Acrobat file format to create. */
  compatibility;
  /** @static @type {boolean} - Should line art and text be compressed? */
  compressArt;
  /** @static @type {string} - A password string to open the document. */
  documentPassword;
  /** @static @type {boolean} - Enable accessing 128-bit. */
  enableAccess;
  /** @static @type {boolean} - Enable copying of text 128-bit. */
  enableCopy;
  /** @static @type {boolean} - Enable copying and accessing 40-bit. */
  enableCopyAccess;
  /** @static @type {boolean} - Enable plaintext metadata 128-bit - available only for acrobat 6. */
  enablePlainText;
  /** @static @type {PrintFlattenerOptions} - The printing flattener options. */
  flattenerOptions;
  /** @static @type {string} - The transparency flattener preset name. */
  flattenerPreset;
  /** @static @type {number} - Include a subset of fonts when less than this percentage of characters are used. */
  fontSubsetThreshold;
  /** @static @type {boolean} - Generate thumbnails for the saved document. */
  generateThumbnails;
  /** @static @type {CompressionQuality} - How should grayscale bitmap images be compressed. */
  grayscaleCompression;
  /** @static @type {number} - If zero, no downsampling, otherwise, the resolution to downsample grayscale images to. */
  grayscaleDownsampling;
  /** @static @type {number} - Downsample if the image's resolution is above this value. */
  grayscaleDownsamplingImageThreshold;
  /** @static @type {DownsampleMethod} - How should grayscale bitmap images be resampled. */
  grayscaleDownsamplingMethod;
  /** @static @type {number} - Tile size when compressing with JPEG2000. */
  grayscaleTileSize;
  /** @static @type {MonochromeCompression} - How should monochrome bitmap images be compressed. */
  monochromeCompression;
  /** @static @type {number} - If zero, no downsampling, otherwise, the resolution to downsample images to. */
  monochromeDownsampling;
  /** @static @type {number} - Downsample if the image's resolution is above this value. */
  monochromeDownsamplingImageThreshold;
  /** @static @type {DownsampleMethod} - How should monochrome bitmap images be resampled. */
  monochromeDownsamplingMethod;
  /** @static @type {number} - Custom offset (in points) for using the custom paper. */
  offset;
  /** @static @type {boolean} - Should the PDF document be optimized for fast web viewing. */
  optimization;
  /** @static @type {string} - This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition. */
  outputCondition;
  /** @static @type {string} - If selected for Output Intent Profile Name, you can set the name of a registered printing condition. */
  outputConditionID;
  /** @static @type {string} - When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box. */
  outputIntentProfile;
  /** @static @type {PDFPrintAllowedEnum} - PDF security printing permission. */
  pDFAllowPrinting;
  /** @static @type {PDFChangesAllowedEnum} - PDF security changes allowed. */
  pDFChangesAllowed;
  /** @static @type {string} - The max string length is 255 bytes. Name of PDF preset to use. */
  pDFPreset;
  /** @static @type {PDFXStandard} - This control includes the None option for when the user is not complying with any PDF standard. */
  pDFXStandard;
  /** @static @type {string} - This displays the description from the selected preset. */
  pDFXStandardDescription;
  /** @static @type {boolean} - Draw page information. */
  pageInformation;
  /** @static @type {PageMarksTypes} - The page marks style. */
  pageMarksType;
  /** @static @type {string} - A password string to restrict editing security settings. */
  permissionPassword;
  /** @static @type {boolean} - Preserve Illustrator editing capabilities when saving the document. */
  preserveEditability;
  /** @static @type {number} - Flattening printer resolution. */
  printerResolution;
  /** @static @type {boolean} - Draw registration marks. */
  registrationMarks;
  /** @static @type {string} - URL to the site where the specified output condition is registered. No validation is performed on the URL. */
  registryName;
  /** @static @type {boolean} - Require a password to open the document. */
  requireDocumentPassword;
  /** @static @type {boolean} - Use a password to restrict editing security settings. */
  requirePermissionPassword;
  /** @static @type {boolean} - This indicates if manual trapping has been prepared in the document. */
  trapped;
  /** @static @type {PDFTrimMarkWeight} - Trim mark weight. */
  trimMarkWeight;
  /** @static @type {boolean} - Draw trim marks. */
  trimMarks;
  /** @static @type {boolean} - View PDF after saving. */
  viewAfterSaving;
}

/**
 * Options which may be supplied when saving a document as an Illustrator file.
 * @name IllustratorSaveOptions
 * @class
 */
class IllustratorSaveOptions {
  /** @static @type {string} - If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
  artboardRange;
  /** @static @type {Compatibility} - What Illustrator file format version to create. */
  compatibility;
  /** @static @type {boolean} - Should the saved file be compressed (version 10 or later) */
  compressed;
  /** @static @type {boolean} - Embed the document's ICC profile in the saved file (version 9 or later) */
  embedICCProfile;
  /** @static @type {boolean} - Are linked image files to be included in the saved document (versions 7 or later) */
  embedLinkedFiles;
  /** @static @type {OutputFlattening} - How should transparency be flattened for older file format versions (pre-version 9) */
  flattenOutput;
  /** @static @type {number} - Include a subset of fonts when less than this percentage of characters are used (version 9 or later) */
  fontSubsetThreshold;
  /** @static @type {boolean} - Save as a PDF compatible file (version 10 or later) */
  pdfCompatible;
  /** @static @type {boolean} - All the artboards or range of the artboards will be saved. */
  saveMultipleArtboards;
}

/**
 *
 * @name Matrix
 * @class
 */
class Matrix {
  /** @static @type {number} - */
  mValueA;
  /** @static @type {number} - */
  mValueB;
  /** @static @type {number} - */
  mValueC;
  /** @static @type {number} - */
  mValueD;
  /** @static @type {number} - */
  mValueTX;
  /** @static @type {number} - */
  mValueTY;
}

/**
 * Options which may be supplied when exporting a document as a JPEG file.
 * @name ExportOptionsJPEG
 * @class
 */
class ExportOptionsJPEG {
  /** @static @type {boolean} - Should the resulting image be antialiased. */
  antiAliasing;
  /** @static @type {boolean} - Should the resulting image be clipped to the artboard. */
  artBoardClipping;
  /** @static @type {number} - Blur the resulting image this much. */
  blurAmount;
  /** @static @type {number} - Horizontal scaling factor. */
  horizontalScale;
  /** @static @type {boolean} - Should the artboard be matted with a color. */
  matte;
  /** @static @type {RGBColor} - The color to use when matting the artboard (default: white) */
  matteColor;
  /** @static @type {boolean} - Should the image be optimized for web viewing. */
  optimization;
  /** @static @type {number} - Quality of resulting image. */
  qualitySetting;
  /** @static @type {boolean} - Should the resulting image be saved as HTML. */
  saveAsHTML;
  /** @static @type {number} - Vertical scaling factor. */
  verticalScale;
}

/**
 * Options which may be supplied when exporting a document as an 8 bit PNG file.
 * @name ExportOptionsPNG8
 * @class
 */
class ExportOptionsPNG8 {
  /** @static @type {boolean} - Should the resulting image be antialiased. */
  antiAliasing;
  /** @static @type {boolean} - Should the resulting image be clipped to the artboard. */
  artBoardClipping;
  /** @static @type {number} - Number of colors in exported color table. */
  colorCount;
  /** @static @type {ColorDitherMethod} - Method used to dither colors. */
  colorDither;
  /** @static @type {ColorReductionMethod} - Method used to reduce the number of colors. */
  colorReduction;
  /** @static @type {number} - How much should the colors be dithered. */
  ditherPercent;
  /** @static @type {number} - Horizontal scaling factor. */
  horizontalScale;
  /** @static @type {boolean} - Should the resulting image be interlaced. */
  interlaced;
  /** @static @type {boolean} - Should the artboard be matted with a color. */
  matte;
  /** @static @type {RGBColor} - The color to use when matting the artboard (default: white) */
  matteColor;
  /** @static @type {boolean} - Should the resulting image be saved as HTML. */
  saveAsHTML;
  /** @static @type {boolean} - Should the resulting image use transparency. */
  transparency;
  /** @static @type {number} - Vertical scaling factor. */
  verticalScale;
  /** @static @type {number} - How much should the color table be changed to match the web palette. */
  webSnap;
}

/**
 * Options which may be supplied when exporting a document as an 24 bit PNG file.
 * @name ExportOptionsPNG24
 * @class
 */
class ExportOptionsPNG24 {
  /** @static @type {boolean} - Should the resulting image be antialiased. */
  antiAliasing;
  /** @static @type {boolean} - Should the resulting image be clipped to the artboard. */
  artBoardClipping;
  /** @static @type {Dimensions} - Dimensions in which to contain the resulting raster. */
  dimensions;
  /** @static @type {number} - Horizontal scaling factor. */
  horizontalScale;
  /** @static @type {boolean} - Should the artboard be matted with a color. */
  matte;
  /** @static @type {RGBColor} - The color to use when matting the artboard (default: white) */
  matteColor;
  /** @static @type {boolean} - Should the resulting image be saved as HTML. */
  saveAsHTML;
  /** @static @type {boolean} - Should the resulting image use transparency. */
  transparency;
  /** @static @type {number} - Vertical scaling factor. */
  verticalScale;
}

/**
 * Options which may be supplied when exporting a document as a GIF file.
 * @name ExportOptionsGIF
 * @class
 */
class ExportOptionsGIF {
  /** @static @type {boolean} - Should the resulting image be antialiased. */
  antiAliasing;
  /** @static @type {boolean} - Should the resulting image be clipped to the artboard. */
  artBoardClipping;
  /** @static @type {number} - Number of colors in exported color table. */
  colorCount;
  /** @static @type {ColorDitherMethod} - Method used to dither colors. */
  colorDither;
  /** @static @type {ColorReductionMethod} - Method used to reduce the number of colors. */
  colorReduction;
  /** @static @type {number} - How much should the colors be dithered. */
  ditherPercent;
  /** @static @type {number} - Horizontal scaling factor. */
  horizontalScale;
  /** @static @type {number} - Level of information loss during compression. */
  infoLossPercent;
  /** @static @type {boolean} - Should the resulting image be interlaced. */
  interlaced;
  /** @static @type {boolean} - Should the artboard be matted with a color. */
  matte;
  /** @static @type {RGBColor} - The color to use when matting the artboard (default: white) */
  matteColor;
  /** @static @type {boolean} - Should the resulting image be saved as HTML. */
  saveAsHTML;
  /** @static @type {boolean} - Should the resulting image use transparency. */
  transparency;
  /** @static @type {number} - Vertical scaling factor. */
  verticalScale;
  /** @static @type {number} - How much should the color table be changed to match the web pallet. */
  webSnap;
}

/**
 * Options which may be supplied when exporting a document as a Photoshop file.
 * @name ExportOptionsPhotoshop
 * @class
 */
class ExportOptionsPhotoshop {
  /** @static @type {boolean} - Should the resulting image be antialiased. */
  antiAliasing;
  /** @static @type {string} - If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
  artboardRange;
  /** @static @type {boolean} - Export text objects as editable text layers. */
  editableText;
  /** @static @type {boolean} - Embed an ICC profile when exporting. */
  embedICCProfile;
  /** @static @type {ImageColorSpace} - The color space of the exported file. */
  imageColorSpace;
  /** @static @type {boolean} - Preserve as much of the original document's structure as possible when exporting. */
  maximumEditability;
  /** @static @type {number} - The resolution of the exported file. */
  resolution;
  /** @static @type {boolean} - All the artboards or range of the artboards will be exported. */
  saveMultipleArtboards;
  /** @static @type {boolean} - Should a warning dialog be displayed because of conflicts in the export settings. */
  warnings;
  /** @static @type {boolean} - Preserve document layers when exporting. */
  writeLayers;
}

/**
 * Options which may be supplied when exporting a document as an SVG file.
 * @name ExportOptionsSVG
 * @class
 */
class ExportOptionsSVG {
  /** @static @type {SVGDTDVersion} - The version of DTD that the exported file should be conforming to. */
  DTD;
  /** @static @type {string} - If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
  artboardRange;
  /** @static @type {boolean} - Should the exported file be compressed. */
  compressed;
  /** @static @type {number} - Decimal precision for element coordinate values. */
  coordinatePrecision;
  /** @static @type {SVGCSSPropertyLocation} - How should the CSS properties of the document be included in the document. */
  cssProperties;
  /** @static @type {SVGDocumentEncoding} - How should the text in the document be encoded. */
  documentEncoding;
  /** @static @type {boolean} - Should the raster images in the exported file be included. */
  embedRasterImages;
  /** @static @type {SVGFontSubsetting} - What font glyphs should be included in the exported file. */
  fontSubsetting;
  /** @static @type {SVGFontType} - The type of font that should be included in the exported file. */
  fontType;
  /** @static @type {boolean} - */
  includeFileInfo;
  /** @static @type {boolean} - */
  includeUnusedStyles;
  /** @static @type {boolean} - */
  includeVariablesAndDatasets;
  /** @static @type {boolean} - */
  optimizeForSVGViewer;
  /** @static @type {boolean} - Preserve Illustrator editing capabilities when exporting the document. */
  preserveEditability;
  /** @static @type {boolean} - Is SVG auto kerning allowed? */
  sVGAutoKerning;
  /** @static @type {boolean} - Is SVG text-on-path construct allowed? */
  sVGTextOnPath;
  /** @static @type {boolean} - All the artboards or range of the artboards will be saved. */
  saveMultipleArtboards;
  /** @static @type {boolean} - Preserve slice data in exported document. */
  slices;
}

/**
 * Options which may be supplied when exporting a document as a Web optimized SVG file.
 * @name ExportOptionsWebOptimizedSVG
 * @class
 */
class ExportOptionsWebOptimizedSVG {
  /** @static @type {string} - If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
  artboardRange;
  /** @static @type {number} - Decimal precision for element coordinate values. */
  coordinatePrecision;
  /** @static @type {SVGCSSPropertyLocation} - How should the CSS properties of the document be included in the document. */
  cssProperties;
  /** @static @type {SVGFontType} - The type of font that should be included in the exported file. */
  fontType;
  /** @static @type {RasterImageLocation} - Should the raster images in the exported file be included. */
  rasterImageLocation;
  /** @static @type {boolean} - All the artboards or range of the artboards will be saved. */
  saveMultipleArtboards;
  /** @static @type {SVGIdType} - How object names (IDs) are generated in exported SVG. */
  svgId;
  /** @static @type {boolean} - Reduces the size of the svg. */
  svgMinify;
  /** @static @type {boolean} - Makes the SVG Responsive. */
  svgResponsive;
}

/**
 * Options which may be supplied when exporting a document as an Flash (.SWF) file.
 * @name ExportOptionsFlash
 * @class
 */
class ExportOptionsFlash {
  /** @static @type {ArtClippingOption} - How should the arts be clipped during the output. */
  artClipping;
  /** @static @type {string} - If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
  artboardRange;
  /** @static @type {RGBColor} - The background color. */
  backgroundColor;
  /** @static @type {Layer[]} - A list of layers to be included as the static background in all exported Flash frames. */
  static backgroundLayers;
  /** @static @type {BlendAnimationType} - Controls how the blend art objects are animated when export to Flash frames. */
  blendAnimation;
  /** @static @type {boolean} - Should the exported file be compressed. */
  compressed;
  /** @static @type {boolean} - Should all text be converted to outlines. */
  convertTextToOutlines;
  /** @static @type {number} - How much curve information should be preserved. */
  curveQuality;
  /** @static @type {boolean} - Should all symbol definitions in the palette be exported to the SWF File. */
  exportAllSymbols;
  /** @static @type {FlashExportStyle} - How should the Flash file be created. */
  exportStyle;
  /** @static @type {FlashExportVersion} - Which version of SWF to export. */
  exportVersion;
  /** @static @type {number} - When exporting layers to Flash frames. */
  frameRate;
  /** @static @type {boolean} - Should the kerning information for text objects be ignored. */
  ignoreTextKerning;
  /** @static @type {FlashImageFormat} - How should the images in the exported Flash file be compressed. */
  imageFormat;
  /** @static @type {boolean} - If true, include minimal XMP metadata in the exported file. */
  includeMetadata;
  /** @static @type {FlashJPEGMethod} - What method to use. */
  jpegMethod;
  /** @static @type {number} - Level of compression. */
  jpegQuality;
  /** @static @type {LayerOrderType} - The order in which the layers will be exported to Flash frames. */
  layerOrder;
  /** @static @type {boolean} - Should the Flash file be set to loop when run. */
  looping;
  /** @static @type {FlashPlaybackSecurity} - What access should the SWF file have - local or network access. */
  playbackAccess;
  /** @static @type {boolean} - Choose whether to preserve artwork appearance or editability (default) during export. */
  preserveAppearance;
  /** @static @type {boolean} - Prevent the exported file from being imported by other applications. */
  readOnly;
  /** @static @type {SaveOptions} - If a file with the same name already exists, should it be replaced? */
  replacing;
  /** @static @type {number} - Pixels per inch. */
  resolution;
  /** @static @type {boolean} - All the artboards or range of the artboards will be exported. */
  saveMultipleArtboards;
}

/**
 * Options which may be supplied when exporting a document to AutoCAD formats (.dwg or .dxf)
 * @name ExportOptionsAutoCAD
 * @class
 */
class ExportOptionsAutoCAD {
  /** @static @type {boolean} - Alter paths for appearance. */
  alterPathsForAppearance;
  /** @static @type {AutoCADColors} - Number of colors to export into the AutoCAD file. */
  colors;
  /** @static @type {boolean} - Whether to convert text to outlines. */
  convertTextToOutlines;
  /** @static @type {AutoCADExportFileFormat} - Which format to export the file as. */
  exportFileFormat;
  /** @static @type {AutoCADExportOption} - Whether to preserve appearance or editability during export. */
  exportOption;
  /** @static @type {boolean} - Export selected art only. */
  exportSelectedArtOnly;
  /** @static @type {AutoCADRasterFormat} - Raster format in which to export raster art. */
  rasterFormat;
  /** @static @type {boolean} - Whether to scale lineweights by the same amount as rest of the drawing. */
  scaleLineweights;
  /** @static @type {AutoCADUnit} - Units from which to map. */
  unit;
  /** @static @type {number} - Ratio by which to scale the output. */
  unitScaleRatio;
  /** @static @type {AutoCADCompatibility} - Release of AutoCAD to export to. */
  version;
}

/**
 * Options which may be supplied when exporting a document as a TIFF file.
 * @name ExportOptionsTIFF
 * @class
 */
class ExportOptionsTIFF {
  /** @static @type {AntiAliasingMethod} - Should the resulting image be antialiased. */
  antiAliasing;
  /** @static @type {string} - If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
  artboardRange;
  /** @static @type {TIFFByteOrder} - Mac or PC byte order when exporting. */
  byteOrder;
  /** @static @type {boolean} - Embed an ICC profile when exporting. */
  embedICCProfile;
  /** @static @type {ImageColorSpace} - The color space of the exported file. */
  imageColorSpace;
  /** @static @type {boolean} - Compress TIFF file with LZW Compression when exporting. */
  lZWCompression;
  /** @static @type {number} - The resolution of the exported file. */
  resolution;
  /** @static @type {boolean} - All the artboards or range of the artboards will be exported. */
  saveMultipleArtboards;
}

/**
 * The parent class for all color values used in Illustrator. See the specific color classes for more information.
 * @name Color
 * @class
 */
class Color {}

/**
 * An Lab color specification.
 * @name LabColorJSDocType
 * @class
 */
class LabColorJSDocType {
  /** @type {number} - The a color value (between -128.0 and 127.0) */
  a;
  /** @type {number} - The b color value (between -128.0 and 127.0) */
  b;
  /** @type {number} - The L color value (between 0.0 and 100.0) */
  l;
}

/**
 * @typedef {Color & LabColorJSDocType} LabColor
*/

/**
 * Dimensions (height and width)
 * @name Dimensions
 * @class
 */
class Dimensions {
  /** @static @type {number} - The Height parameter. */
  height;
  /** @static @type {number} - The Width parameter. */
  width;
}

/**
 * An RGB color specification.
 * @name RGBColorJSDocType
 * @class
 */
class RGBColorJSDocType {
  /** @type {number} - The blue color value (between 0.0 and 255.0) */
  blue;
  /** @type {number} - The green color value (between 0.0 and 255.0) */
  green;
  /** @type {number} - The red color value (between 0.0 and 255.0) */
  red;
}

/**
 * @typedef {Color & RGBColorJSDocType} RGBColor
*/

/**
 * A CMYK color specification.
 * @name CMYKColorJSDocType
 * @class
 */
class CMYKColorJSDocType {
  /** @type {number} - The black color value (between 0.0 and 100.0) */
  black;
  /** @type {number} - The cyan color value (between 0.0 and 100.0) */
  cyan;
  /** @type {number} - The magenta color value (between 0.0 and 100.0) */
  magenta;
  /** @type {number} - The yellow color value (between 0.0 and 100.0) */
  yellow;
}

/**
 * @typedef {Color & CMYKColorJSDocType} CMYKColor
*/

/**
 * A gray color specification.
 * @name GrayColorJSDocType
 * @class
 */
class GrayColorJSDocType {
  /** @type {number} - The gray value (between 0.0 and 100.0) */
  gray;
}

/**
 * @typedef {Color & GrayColorJSDocType} GrayColor
*/

/**
 * Represents the 'none' color.
 * @name NoColorJSDocType
 * @class
 */
class NoColorJSDocType {}

/**
 * @typedef {Color & NoColorJSDocType} NoColor
*/

/**
 * Information about the spot color.
 * @name SpotColorJSDocType
 * @class
 */
class SpotColorJSDocType {
  /** @type {Spot} - */
  spot;
  /** @type {number} - Percentage level of tint to be applied to the spot color. */
  tint;
}

/**
 * @typedef {Color & SpotColorJSDocType} SpotColor
*/

/**
 * A Pattern color specification.
 * @name PatternColorJSDocType
 * @class
 */
class PatternColorJSDocType {
  /** @type {Matrix} - Additional transformation arising from manipulating the path. */
  matrix;
  /** @type {Pattern} - */
  pattern;
  /** @type {boolean} - Whether or not the prototype is reflected before filling. */
  reflect;
  /** @type {number} - The axis around which to reflect. */
  reflectAngle;
  /** @type {number} - The angle to rotate the before filling. */
  rotation;
  /** @type {Point | [number, number]} - The fraction to scale the prototype before filling. */
  scaleFactor;
  /** @type {number} - The angle to slant the shear by. */
  shearAngle;
  /** @type {number} - The axis to shear with respect to. */
  shearAxis;
  /** @type {number} - The angle to translate the (unscaled) prototype before filling. */
  shiftAngle;
  /** @type {number} - The distance to translate the (unscaled) prototype before filling. */
  shiftDistance;
}

/**
 * @typedef {Color & PatternColorJSDocType} PatternColor
*/

/**
 * A Gradient color specification.
 * @name GradientColorJSDocType
 * @class
 */
class GradientColorJSDocType {
  /** @type {number} - The gradient vector angle. */
  angle;
  /** @type {Gradient} - Reference to the object defining the gradient. */
  gradient;
  /** @type {number} - The gradient hilite vector angle. */
  hiliteAngle;
  /** @type {number} - The gradient hilite vector length. */
  hiliteLength;
  /** @type {number} - The gradient vector length. */
  length;
  /** @type {Matrix} - Additional transformation arising from manipulating the path. */
  matrix;
  /** @type {Point | [number, number]} - The gradient vector origin. */
  origin;
}

/**
 * @typedef {Color & GradientColorJSDocType} GradientColor
*/

/**
 * Tab stop information (returned by tab stops from a paragraph object)
 * @name TabStopInfo
 * @class
 */
class TabStopInfo {
  /** @static @type {TabStopAlignment} - The alignment of the tab stop. */
  alignment;
  /** @static @type {string} - The character used for decimal tab stops. */
  decimalCharacter;
  /** @static @type {string} - The leader dot. */
  leader;
  /** @static @type {number} - The position of the tab stop expressed in points. */
  position;
}

/**
 * An installed printer.
 * @name Printer
 * @class
 */
class Printer {
  /** @static @type {string} - The printer name. */
  name;
  /** @static @type {PrinterInfo} - The printer information. */
  printerInfo;
}

/**
 * Printer information.
 * @name PrinterInfo
 * @class
 */
class PrinterInfo {
  /** @static @type {boolean} - Does the printer support binary printing? */
  binaryPrintingSupport;
  /** @static @type {PrinterColorMode} - The printer color capability. */
  colorSupport;
  /** @static @type {boolean} - Does the printer support custom paper size? */
  customPaperSupport;
  /** @static @type {boolean} - Does the printer support custom paper transverse? */
  customPaperTransverseSupport;
  /** @static @type {number} - The printer default resolution. */
  deviceResolution;
  /** @static @type {boolean} - Does the printer support InRIP color separation? */
  inRIPSeparationSupport;
  /** @static @type {number} - The printer maximum device resolution. */
  maxDeviceResolution;
  /** @static @type {number} - Custom paper's maximum height. */
  maxPaperHeight;
  /** @static @type {number} - Custom paper's maximum height offset. */
  maxPaperHeightOffset;
  /** @static @type {number} - Custom paper's maximum width. */
  maxPaperWidth;
  /** @static @type {number} - Custom paper's maximum width offset. */
  maxPaperWidthOffset;
  /** @static @type {number} - Custom paper's minimum height. */
  minPaperHeight;
  /** @static @type {number} - Custom paper's minimum height offset. */
  minPaperHeightOffset;
  /** @static @type {number} - Custom paper's minimum width. */
  minPaperWidth;
  /** @static @type {number} - Custom paper's minimum width offset. */
  minPaperWidthOffset;
  /** @static @type {Paper[]} - The list of supported paper sizes. */
  paperSizes;
  /** @static @type {PrinterPostScriptLevelEnum} - The PostScript level. */
  postScriptLevel;
  /** @static @type {PrinterTypeEnum} - The printer type. */
  printerType;
}

/**
 * A PPD file.
 * @name PPDFile
 * @class
 */
class PPDFile {
  /** @static @type {PPDFileInfo} - The PPD file information. */
  PPDInfo;
  /** @static @type {string} - The PPD model name. */
  name;
}

/**
 * PPD file information.
 * @name PPDFileInfo
 * @class
 */
class PPDFileInfo {
  /** @static @type {File} - Path specification for the PPD file. */
  PPDFilePath;
  /** @static @type {string} - The PostScript language level. */
  languageLevel;
  /** @static @type {Screen[]} - List of color separation screens. */
  screenList;
  /** @static @type {ScreenSpotFunction[]} - List of color separation screen spot functions. */
  screenSpotFunctionList;
}

/**
 * Paper size.
 * @name Paper
 * @class
 */
class Paper {
  /** @static @type {string} - The paper name. */
  name;
  /** @static @type {PaperInfo} - The paper information. */
  paperInfo;
}

/**
 * Paper information.
 * @name PaperInfo
 * @class
 */
class PaperInfo {
  /** @static @type {boolean} - Is it a custom paper? */
  customPaper;
  /** @static @type {number} - The paper's height (in points) */
  height;
  /** @static @type {Rect} - The imageable area. */
  imageableArea;
  /** @static @type {number} - The paper's width (in points) */
  width;
}

/**
 * Color separation screen.
 * @name Screen
 * @class
 */
class Screen {
  /** @static @type {string} - The color separation screen name. */
  name;
  /** @static @type {ScreenInfo} - The color separation screen information. */
  screenInfo;
}

/**
 * Screen information.
 * @name ScreenInfo
 * @class
 */
class ScreenInfo {
  /** @static @type {number} - The screen's angle (in degrees) */
  angle;
  /** @static @type {boolean} - Is it the default screen? */
  defaultScreen;
  /** @static @type {number} - The screen's frequency. */
  frequency;
}

/**
 * Color separation screen spot function.
 * @name ScreenSpotFunction
 * @class
 */
class ScreenSpotFunction {
  /** @static @type {string} - The color separation screen spot function name. */
  name;
  /** @static @type {string} - The spot function in terms of the PostScript commands. */
  spotFunction;
}

/**
 * Printer's ink.
 * @name Ink
 * @class
 */
class Ink {
  /** @static @type {InkInfo} - The ink information. */
  inkInfo;
  /** @static @type {string} - The ink's name. */
  name;
}

/**
 * Ink information.
 * @name InkInfo
 * @class
 */
class InkInfo {
  /** @static @type {number} - The ink's screen angle (in degrees) */
  angle;
  /** @static @type {Color} - The color of the custom ink. */
  customColor;
  /** @static @type {number} - The neutral density. */
  density;
  /** @static @type {string} - The dot shape name. */
  dotShape;
  /** @static @type {number} - The ink's frequency. */
  frequency;
  /** @static @type {InkType} - The ink type. */
  kind;
  /** @static @type {InkPrintStatus} - The ink printing status. */
  printingStatus;
  /** @static @type {TrappingType} - The trapping type. */
  trapping;
  /** @static @type {number} - The order of trapping for the ink. */
  trappingOrder;
}

/**
 * The new document preset to use for creating a new document.
 * @name DocumentPreset
 * @class
 */
class DocumentPreset {
  /** @static @type {DocumentArtboardLayout} - Layout for artboards. */
  artboardLayout;
  /** @static @type {number} - Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts. */
  artboardRowsOrCols;
  /** @static @type {number} - Spacing between artboards. */
  artboardSpacing;
  /** @static @type {DocumentColorSpace} - The color mode for the new document. */
  colorMode;
  /** @static @type {number} - The height for the new document. */
  height;
  /** @static @type {number} - Number of artboards for new document.Range (1:100). */
  numArtboards;
  /** @static @type {DocumentPreviewMode} - The preview mode for the new document. */
  previewMode;
  /** @static @type {DocumentRasterResolution} - The raster resolution for the new document. */
  rasterResolution;
  /** @static @type {string} - The title for the new document. */
  title;
  /** @static @type {DocumentTransparencyGrid} - The transparency grid for the new document. */
  transparencyGrid;
  /** @static @type {RulerUnits} - The units for the new document. */
  units;
  /** @static @type {number} - The width for the new document. */
  width;
}

/**
 * The print options.
 * @name PrintOptions
 * @class
 */
class PrintOptions {
  /** @static @type {string} - The name of the PPD to use. */
  PPDName;
  /** @static @type {PrintColorManagementOptions} - The printing color management options. */
  colorManagementOptions;
  /** @static @type {PrintColorSeparationOptions} - The printing color separation options. */
  colorSeparationOptions;
  /** @static @type {PrintCoordinateOptions} - The printing coordinate options. */
  coordinateOptions;
  /** @static @type {PrintFlattenerOptions} - The printing flattener options. */
  flattenerOptions;
  /** @static @type {string} - The transparency flattener preset name. */
  flattenerPreset;
  /** @static @type {PrintFontOptions} - The printing font options. */
  fontOptions;
  /** @static @type {PrintJobOptions} - The printing job options. */
  jobOptions;
  /** @static @type {PrintPageMarksOptions} - The printing page marks options. */
  pageMarksOptions;
  /** @static @type {PrintPaperOptions} - The paper options. */
  paperOptions;
  /** @static @type {PrintPostScriptOptions} - The printing PostScript options. */
  postScriptOptions;
  /** @static @type {string} - The name of a print preset to use. */
  printPreset;
  /** @static @type {string} - The name of the printer to print to. */
  printerName;
}

/**
 * The paper options.
 * @name PrintPaperOptions
 * @class
 */
class PrintPaperOptions {
  /** @static @type {number} - The custom height (in points) for using the custom paper. */
  height;
  /** @static @type {string} - The paper's name. */
  name;
  /** @static @type {number} - Custom offset (in points) for using the custom paper. */
  offset;
  /** @static @type {boolean} - Whether to transverse the artwork (rotate 90 degrees) on the custom paper. */
  transverse;
  /** @static @type {number} - The custom width (in points) for using the custom paper. */
  width;
}

/**
 * The print job options.
 * @name PrintJobOptions
 * @class
 */
class PrintJobOptions {
  /** @static @type {string} - Artboard Range to be printed if PrintAllArtboards is false. */
  artboardRange;
  /** @static @type {number} - The bitmap resolution. */
  bitmapResolution;
  /** @static @type {boolean} - Whether to collate print pages. */
  collate;
  /** @static @type {number} - The number of copies to print. */
  copies;
  /** @static @type {PrintArtworkDesignation} - The layers/objects to be printed. */
  designation;
  /** @static @type {File} - The file to be printed to. */
  file;
  /** @static @type {string} - The print job name. */
  name;
  /** @static @type {boolean} - Whether to print all artboards. */
  printAllArtboards;
  /** @static @type {PrintingBounds} - The printing bounds. */
  printArea;
  /** @static @type {boolean} - Whether to print as bitmap. */
  printAsBitmap;
  /** @static @type {boolean} - Print pages in reverse order. */
  reversePages;
}

/**
 * Print color separation options.
 * @name PrintColorSeparationOptions
 * @class
 */
class PrintColorSeparationOptions {
  /** @static @type {PrintColorSeparationMode} - The color separation type. */
  colorSeparationMode;
  /** @static @type {boolean} - Whether to convert all spot colors to process colors. */
  convertSpotColors;
  /** @static @type {Ink[]} - The list of inks for color separation. */
  inkList;
  /** @static @type {boolean} - Whether to overprint in black. */
  overPrintBlack;
}

/**
 * The print coordinate options.
 * @name PrintCoordinateOptions
 * @class
 */
class PrintCoordinateOptions {
  /** @static @type {boolean} - Whether to flip artwork horizontally. */
  emulsion;
  /** @static @type {boolean} - Whether to proportionally scale the artwork to fit on the page. */
  fitToPage;
  /** @static @type {number} - The horizontal scaling factor expressed as a percentage (100 = 100%) */
  horizontalScale;
  /** @static @type {PrintOrientation} - The artwork orientation. */
  orientation;
  /** @static @type {PrintPosition} - The artwork position on media. */
  position;
  /** @static @type {PrintTiling} - The page tiling mode. */
  tiling;
  /** @static @type {number} - The vertical scaling factor expressed as a percentage (100 = 100%) */
  verticalScale;
}

/**
 * The page marks options.
 * @name PrintPageMarksOptions
 * @class
 */
class PrintPageMarksOptions {
  /** @static @type {Rect} - The bleed offset rect. */
  bleedOffsetRect;
  /** @static @type {boolean} - Whether to enable color bars printing. */
  colorBars;
  /** @static @type {Rect} - The page marks offset rect. */
  marksOffsetRect;
  /** @static @type {boolean} - Whether to enable page info marks printing. */
  pageInfoMarks;
  /** @static @type {PageMarksTypes} - The page marks style. */
  pageMarksType;
  /** @static @type {boolean} - Whether to enable registration marks printing. */
  registrationMarks;
  /** @static @type {boolean} - Whether to enable trim marks printing. */
  trimMarks;
  /** @static @type {number} - Stroke weight of trim marks. */
  trimMarksWeight;
}

/**
 * The font options for printing.
 * @name PrintFontOptions
 * @class
 */
class PrintFontOptions {
  /** @static @type {PrintFontDownloadMode} - The font download mode. */
  downloadFonts;
  /** @static @type {FontSubstitutionPolicy} - The font substitution policy. */
  fontSubstitution;
}

/**
 * The PostScript options.
 * @name PrintPostScriptOptions
 * @class
 */
class PrintPostScriptOptions {
  /** @static @type {boolean} - Whether to print in binary mode. */
  binaryPrinting;
  /** @static @type {boolean} - Use PostScript level 1 compatible gradient and gradient mesh printing. */
  compatibleShading;
  /** @static @type {boolean} - Whether to force continuous tone. */
  forceContinuousTone;
  /** @static @type {PostScriptImageCompressionType} - The image compression type. */
  imageCompression;
  /** @static @type {boolean} - Whether to print in negative mode. */
  negativePrinting;
  /** @static @type {PrinterPostScriptLevelEnum} - The PostScript language level. */
  postScriptLevel;
  /** @static @type {number} - The shading resolution. */
  shadingResolution;
}

/**
 * The color management options.
 * @name PrintColorManagementOptions
 * @class
 */
class PrintColorManagementOptions {
  /** @static @type {PrintColorProfile} - The color management profile mode. */
  colorProfileMode;
  /** @static @type {PrintColorIntent} - The color management intent type. */
  intent;
  /** @static @type {string} - The color management profile name. */
  name;
}

/**
 * The transparency flattening options.
 * @name PrintFlattenerOptions
 * @class
 */
class PrintFlattenerOptions {
  /** @static @type {boolean} - Whether to clip complex regions. */
  clipComplexRegions;
  /** @static @type {boolean} - Whether to convert all strokes to outlines. */
  convertStrokesToOutlines;
  /** @static @type {boolean} - Whether to convert all text to outlines. */
  convertTextToOutlines;
  /** @static @type {number} - The flattening balance. */
  flatteningBalance;
  /** @static @type {number} - The gradient resolution. */
  gradientResolution;
  /** @static @type {PDFOverprint} - Overprint. */
  overprint;
  /** @static @type {number} - The rasterization resolution. */
  rasterizationResolution;
}

/**
 * Options which may be supplied when capturing a portion of the artwork as an 24 bit PNG file.
 * @name ImageCaptureOptions
 * @class
 */
class ImageCaptureOptions {
  /** @static @type {boolean} - Should the resulting image be antialiased. */
  antiAliasing;
  /** @static @type {boolean} - Should the artboard be matted with a color. */
  matte;
  /** @static @type {RGBColor} - The color to use when matting the artboard (default: white) */
  matteColor;
  /** @static @type {number} - The resolution of the captured image file. */
  resolution;
  /** @static @type {boolean} - Should the resulting image use transparency. */
  transparency;
}

/**
 * The document raster effects settings.
 * @name RasterEffectOptions
 * @class
 */
class RasterEffectOptions {
  /** @static @type {boolean} - Should the resulting image be antialiased. */
  antiAliasing;
  /** @static @type {boolean} - Should a clipping mask be created for the resulting image. */
  clippingMask;
  /** @static @type {RasterizationColorModel} - The color model for the rasterization. */
  colorModel;
  /** @static @type {boolean} - Whether to convert all spot colors to process colors in the resulting image. */
  convertSpotColors;
  /** @static @type {number} - The amount of white space (in points) to be added around the object during rasterization. */
  padding;
  /** @static @type {number} - The rasterization resolution in dots-per-inch (dpi) */
  resolution;
  /** @static @type {boolean} - Should the resulting image use transparency. */
  transparency;
}

/**
 * Options which may be supplied when rasterizing the artwork.
 * @name RasterizeOptions
 * @class
 */
class RasterizeOptions {
  /** @static @type {AntiAliasingMethod} - The type of antialiasing method. */
  antiAliasingMethod;
  /** @static @type {boolean} - Should rasterize against a black background instead of white. */
  backgroundBlack;
  /** @static @type {boolean} - Should a clipping mask be created for the resulting image. */
  clippingMask;
  /** @static @type {RasterizationColorModel} - The color model for the rasterization. */
  colorModel;
  /** @static @type {boolean} - Whether to convert all spot colors to process colors in the resulting image. */
  convertSpotColors;
  /** @static @type {boolean} - Should all text be converted to outlines before rasterization. */
  convertTextToOutlines;
  /** @static @type {boolean} - Should the resulting image incorporates the layer attributes (such as opacity and blend mode) */
  includeLayers;
  /** @static @type {number} - The amount of white space (in points) to be added around the object during rasterization. */
  padding;
  /** @static @type {number} - The rasterization resolution in dots-per-inch (dpi) */
  resolution;
  /** @static @type {boolean} - Should the resulting image use transparency. */
  transparency;
}

/**
 * The Adobe Illustrator application.
 * @name Application
 * @class
 */
class Application {
  /** @readonly @type {string[]} - The list of PDF preset names currently available for use. */
  PDFPresetsList;
  /** @readonly @type {PPDFile[]} - The list of PPD files currently available for use. For performance reasons, the PPDFile entry only contains the model name and file spec of each PPD file. */
  PPDFileList;
  /** @type {AiDocument} - The active document. */
  activeDocument;
  /** @readonly @type {boolean} - Is a web browser available? */
  browserAvailable;
  /** @readonly @type {string} - The build number of the Adobe Illustrator application. */
  buildNumber;
  /** @readonly @type {File[]} - The list of color settings files currently available for use. */
  colorSettingsList;
  /** @type {CoordinateSystem} - Coordinate System used by script. */
  coordinateSystem;
  /** @readonly @type {File} - The default color settings file for the current application locale. */
  defaultColorSettings;
  /** @readonly @type {Documents} - The open documents. */
  documents;
  /** @readonly @type {string[]} - The list of flattener style names currently available for use. */
  flattenerPresetsList;
  /** @readonly @type {number} - The amount of unused memory within the Adobe Illustrator partition. */
  freeMemory;
  /** @readonly @type {string} - The Locale of the Adobe Illustrator application. */
  locale;
  /** @readonly @type {string} - The application's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {boolean} - Does paste operation remember layers structure? */
  pasteRemembersLayers;
  /** @readonly @type {File} - Path specification for the application. */
  path;
  /** @readonly @type {Preferences} - Preferences for Illustrator. */
  preferences;
  /** @readonly @type {string[]} - The list of print preset names currently available for use. */
  printPresetsList;
  /** @readonly @type {Printer[]} - The list of installed printers. */
  printerList;
  /** @readonly @type {string} - The version of the Scripting plugin. */
  scriptingVersion;
  /** @type {any} - The selection visible to the user. */
  selection;
  /** @readonly @type {string[]} - The list of presets available for creating a new document. */
  startupPresetsList;
  /** @readonly @type {TextFonts} - Installed fonts. */
  textFonts;
  /** @readonly @type {string[]} - The list of tracing preset names currently available for use. */
  tracingPresetsList;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @readonly @type {string} - The current users adobe id. */
  userAdobeID;
  /** @readonly @type {string} - The current user's GUID. */
  userGUID;
  /** @type {UserInteractionLevel} - What level of interaction with the user should be allowed when handling script commands. */
  userInteractionLevel;
  /** @readonly @type {string} - The version of the Adobe Illustrator application. */
  version;
  /** @readonly @type {boolean} - Is the application visible. */
  visible;
  /**
   * Add the specified to the sequencer.
   * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
   * @param {number} destinationSequenceID - The UID for the owning sequence.
   * @param {number} destinationIndex - The item UID where to insert.
   * @param {string} srcItemIDData - The item ID of the item to construct.
   * @param {string} type - The source of the item to construct.
   * @returns {string}
   */
  aATAddItem = function (sessionIndex, destinationSequenceID, destinationIndex, srcItemIDData, type) {};
  /**
   * Clear the sequencer.
   * @returns {string}
   */
  aATClear = function () {};
  /**
   * Duplicates the specified item(s) from the sequencer.
   * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
   * @param {string} item - The item UID(s)
   * @returns {string}
   */
  aATDuplicateItem = function (sessionIndex, item) {};
  /**
   * Opens the specified item from the sequencer in the item editor.
   * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
   * @param {string} item - The item UID.
   * @returns {string}
   */
  aATEditItem = function (sessionIndex, item) {};
  /**
   * Retrieves a boolean indicating the presence of errors in the last script to execute.
   * @returns {boolean}
   */
  aATErrorsExist = function () {};
  /**
   * Executes the active session in the sequencer.
   * @returns {void}
   */
  aATExecuteSession = function () {};
  /**
   * Executes the active session in the sequencer.
   * @param {File} file - Execute a session file.
   * @returns {void}
   */
  aATExecuteSessionFromFile = function (file) {};
  /**
   * Switches a files relative token and path.
   * @param {string} path - The path relative to the folder specified by Relative.
   * @param {string} relative - The current relative path token.
   * @param {string} newRelative - The new relative path token.
   * @returns {string}
   */
  aATFileRelativeChanged = function (path, relative, newRelative) {};
  /**
   * Prompts the user to save a file or choose a file or directory and returns a relative path string to the file.
   * @param {string} path - The path relative to the folder specified by Relative.
   * @param {string} relative - The current relative path token.
   * @param {string} type - The type of dialog to show in string format.
   * @returns {string}
   */
  aATFileSaveDialog = function (path, relative, type) {};
  /**
   * Retrieves a file path to the AAT editor swf.
   * @returns {File}
   */
  aATGetEditorDialogFile = function () {};
  /**
   * Retrieves a file path to the AAT error dialog swf.
   * @returns {File}
   */
  aATGetErrorDialogFile = function () {};
  /**
   * Gets an XML string listing the relative paths and the UI strings to display them.
   * @returns {string}
   */
  aATGetListOfRelativePaths = function () {};
  /**
   * Get the active session for the sequncer.
   * @returns {string}
   */
  aATGetSession = function () {};
  /**
   * Loads a session file as an extension to the editor.
   * @returns {string}
   */
  aATLoadLibExtension = function () {};
  /**
   * Loads the aat model to the editor.
   * @returns {string}
   */
  aATLoadModel = function () {};
  /**
   * Loads a session into the sequencer.
   * @returns {string}
   */
  aATLoadSessionFile = function () {};
  /**
   * Loads a UI description as an extension to the editor.
   * @returns {string}
   */
  aATLoadUIExtension = function () {};
  /**
   * Moves the specified in the sequencer.
   * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to move.
   * @param {string} moveThisID - The UID of the item to replace.
   * @param {number} newSessionIndex - The index in the session of the destination top-most sequence.
   * @param {string} destinationSequenceID - The UID for the owning sequence.
   * @param {number} destinationIndex - The index where to insert.
   * @returns {string}
   */
  aATMoveItem = function (sessionIndex, moveThisID, newSessionIndex, destinationSequenceID, destinationIndex) {};
  /**
   * Removes the specified item from the sequencer.
   * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
   * @param {string} item - The item UID.
   * @returns {string}
   */
  aATRemoveItem = function (sessionIndex, item) {};
  /**
   * Replaces the specified to the sequencer.
   * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
   * @param {number} replaceThisID - The UID of the item to replace.
   * @param {string} srcItemIDData - The item ID of the item to construct.
   * @param {string} type - The source of the item to construct.
   * @returns {string}
   */
  aATReplaceItem = function (sessionIndex, replaceThisID, srcItemIDData, type) {};
  /**
   * Saves the active session in the sequencer to a new file.
   * @returns {string}
   */
  aATSaveAsSession = function () {};
  /**
   * Saves the active session in the sequencer to a file.
   * @returns {string}
   */
  aATSaveSession = function () {};
  /**
   * Applies the data used in the item editor to the item.
   * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to edit.
   * @param {string} item - The item UID.
   * @param {string} data - The data to apply in XML format.
   * @returns {string}
   */
  applyDataToItem = function (sessionIndex, item, data) {};
  /**
   * Applies data to the specified item from the sequencer in the item editor.
   * @param {number} sessionIndex - The index in the session of the top-most sequence for the item to add.
   * @param {string} item - The item UID.
   * @param {string} dataID - The data to apply in XML format.
   * @param {string} data - The data to apply in XML format.
   * @returns {boolean}
   */
  applySingleDataPointToItem = function (sessionIndex, item, dataID, data) {};
  /**
   *
   * @returns {void}
   */
  beep = function () {};
  /**
   * Starts the automation tests for the Sync Settings feature.
   * @returns {boolean}
   */
  beginSyncSettingsAutomationTest = function () {};
  /**
   * Starts the automation tests for the Typekit Font feature.
   * @returns {boolean}
   */
  beginTypekitFontAutomationTest = function () {};
  /**
   * Concatenate two transformation matrices.
   * @param {Matrix} matrix - The matrix that is to be added to.
   * @param {Matrix} secondMatrix - Second transformation matrix.
   * @returns {Matrix}
   */
  concatenateMatrix = function (matrix, secondMatrix) {};
  /**
   * Concatenate a rotation matrix to a transformation matrix.
   * @param {Matrix} matrix - The matrix that is to be added to.
   * @param {number} angle - Angle of rotation (in degrees)
   * @returns {Matrix}
   */
  concatenateRotationMatrix = function (matrix, angle) {};
  /**
   * Concatenate a scale matrix to a transformation matrix.
   * @param {Matrix} matrix - The matrix that is to be added to.
   * @param {number} [scaleX] - Horizontal scaling factor expressed as a percentage (100 = 100%)
   * @param {number} [scaleY] - Vertical scaling factor expressed as a percentage (100 = 100%)
   * @returns {Matrix}
   */
  concatenateScaleMatrix = function (matrix, scaleX, scaleY) {};
  /**
   * Concatenate a translation to a transformation matrix.
   * @param {Matrix} matrix - The matrix that is to be added to.
   * @param {number} [deltaX] - Horizontal transformation.
   * @param {number} [deltaY] - Vertical transformation.
   * @returns {Matrix}
   */
  concatenateTranslationMatrix = function (matrix, deltaX, deltaY) {};
  /**
   * Converts a sample-component color from one color space to another.
   * @param {ImageColorSpace} sourceColorSpace - The source color space.
   * @param {number[]} sourceColor - The color to convert, an array of color components. First location of the array should contain alpha if source-has-alpha is true.
   * @param {ImageColorSpace} destColorSpace - The destination color space.
   * @param {ColorConvertPurpose} colorConvertPurpose - The parameter which passes the purpose of conversion.
   * @param {boolean} [sourceHasAlpha] - True if alpha channel is present in source color.
   * @param {boolean} [destHasAlpha] - True if alpha channel is present in destination color.
   * @returns {number[]}
   */
  convertSampleColor = function (sourceColorSpace, sourceColor, destColorSpace, colorConvertPurpose, sourceHasAlpha, destHasAlpha) {};
  /**
   * Copy current selection to the clipboard.
   * @returns {void}
   */
  copy = function () {};
  /**
   * Cut current selection to the clipboard.
   * @returns {void}
   */
  cut = function () {};
  /**
   * Deletes an existing workspace.
   * @param {string} workspaceName - Workspace Name.
   * @returns {boolean}
   */
  deleteWorkspace = function (workspaceName) {};
  /**
   * Play an action from the Actions Palette.
   * @param {string} action - The name of the action to play (note that the case of letters in the Action name is important and must match the case of the name in the Actions palette)
   * @param {string} from - The name of the action set containing the action being played (note that the case of letters in the Action Set name is important and must match the case of the name in the Actions palette)
   * @param {boolean} [dialogs] - Are dialog boxes associated with the action to be presented?
   * @returns {void}
   */
  doScript = function (action, from, dialogs) {};
  /**
   * Dump the PGF portion of ai file to txt file.
   * @param {File} file - The AI file to be opened.
   * @param {DocumentColorSpace} [documentColorSpace] - Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
   * @param {File} [pGFFile] - Folder to save the output PGF file.
   * @returns {boolean}
   */
  dumpPGFFile = function (file, documentColorSpace, pGFFile) {};
  /**
   * Executes a menu command using the menu shortcut string.
   * @param {string} menuCommandString - Menu command shortcut.
   * @returns {void}
   */
  executeMenuCommand = function (menuCommandString) {};
  /**
   * Returns the JSON Data required by CCX Welcome.
   * @param {string} [mode] - Mode for which the data is to be provided.
   * @returns {string}
   */
  getCCXUserJSONData = function (mode) {};
  /**
   * Retrieves a string containing the results of the last script to execute.
   * @returns {string}
   */
  getExecutionOutput = function () {};
  /**
   * Returns the JSON Data required by Hello.
   * @returns {string}
   */
  getHelloJSONData = function () {};
  /**
   * Returns an identity matrix.
   * @returns {Matrix}
   */
  getIdentityMatrix = function () {};
  /**
   * Get detailed info from the specified PPD file.
   * @param {string} name - The model name of the PPD file.
   * @returns {PPDFileInfo}
   */
  getPPDFileInfo = function (name) {};
  /**
   * Given a preset type, returns the full path to the application's default document profile for the type.
   * @param {DocumentPresetType} presetType - The preset type.
   * @returns {File}
   */
  getPresetFileOfType = function (presetType) {};
  /**
   * Given a preset name, tries and retrieves the settings from the preset template.
   * @param {string} preset - The name of the preset.
   * @returns {DocumentPreset}
   */
  getPresetSettings = function (preset) {};
  /**
   * Returns a rotation transformation matrix.
   * @param {number} [angle] - Angle of rotation (in degrees)
   * @returns {Matrix}
   */
  getRotationMatrix = function (angle) {};
  /**
   * Returns a scale transformation matrix.
   * @param {number} [scaleX] - Horizontal scaling factor expressed as a percentage (100 = 100%)
   * @param {number} [scaleY] - Vertical scaling factor expressed as a percentage (100 = 100%)
   * @returns {Matrix}
   */
  getScaleMatrix = function (scaleX, scaleY) {};
  /**
   * Get the scriptable help group object that represents the search widget in the app bar.
   * @returns {any}
   */
  getScriptableHelpGroup = function () {};
  /**
   * Returns a translation matrix.
   * @param {number} [deltaX] - Horizontal transformation.
   * @param {number} [deltaY] - Vertical transformation.
   * @returns {Matrix}
   */
  getTranslationMatrix = function (deltaX, deltaY) {};
  /**
   * Retrieves a string representing the AAT version.
   * @returns {string}
   */
  getVersionString = function () {};
  /**
   * Invert a matrix.
   * @param {Matrix} matrix - The matrix to invert.
   * @returns {Matrix}
   */
  invertMatrix = function (matrix) {};
  /**
   * Compares two matrices for equality.
   * @param {Matrix} matrix - First transformation matrix to compare.
   * @param {Matrix} secondMatrix - Second transformation matrix.
   * @returns {boolean}
   */
  isEqualMatrix = function (matrix, secondMatrix) {};
  /**
   * Checks if fill is active or not.
   * @returns {boolean}
   */
  isFillActive = function () {};
  /**
   * Tests if a matrix is singular (cannot be inverted)
   * @param {Matrix} matrix - The matrix to check.
   * @returns {boolean}
   */
  isSingularMatrix = function (matrix) {};
  /**
   * Checks if stroke is active or not.
   * @returns {boolean}
   */
  isStrokeActive = function () {};
  /**
   * Is In Touch Workspace.
   * @returns {boolean}
   */
  isTouchWorkspace = function () {};
  /**
   * Is user sharing the application usage data.
   * @returns {boolean}
   */
  isUserSharingAppUsageData = function () {};
  /**
   * Launch cep Extension given its ID.
   * @param {string} extensionID - Arguments for Launching Extension - ID of extension in manifest.xml of corresponding extension.
   * @returns {number}
   */
  launchExtension = function (extensionID) {};
  /**
   * Load an action into action palette.
   * @param {File} actionFilePath - The path on the system of the action file to be loaded.
   * @returns {void}
   */
  loadAction = function (actionFilePath) {};
  /**
   * Load the color settings from the file. If the file is an empty file spec, the color management will be turned off.
   * @param {File} fileSpec - File spec for the color settings.
   * @returns {void}
   */
  loadColorSettings = function (fileSpec) {};
  /**
   * Open the specified document file.
   * @param {File} file - The file to be opened.
   * @param {DocumentColorSpace} [documentColorSpace] - Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
   * @param {any} [options] - Options for opening a particular type of file.
   * @returns {AiDocument}
   */
  open = function (file, documentColorSpace, options) {};
  /**
   * For Internal Use.
   * @param {File} assetURL - For Internal use.
   * @param {File} thumbnailURL - For Internal use.
   * @param {any} [options] - For internal use.
   * @returns {AiDocument}
   */
  openCloudLibraryAssetForEditing = function (assetURL, thumbnailURL, options) {};
  /**
   * Paste clipboard into the current document.
   * @returns {void}
   */
  paste = function () {};
  /**
   * Quit the application.
   * @returns {void}
   */
  quit = function () {};
  /**
   * Redo the last transaction.
   * @returns {void}
   */
  redo = function () {};
  /**
   * Force Illustrator to redraw its window(s)
   * @returns {void}
   */
  redraw = function () {};
  /**
   * Generate Creative Suite ActionScript Wrappers in specified directory.
   * @param {File} outputFolder - Location for the output files.
   * @returns {void}
   */
  reflectCSAW = function (outputFolder) {};
  /**
   * Resets the current workspace.
   * @returns {boolean}
   */
  resetWorkspace = function () {};
  /**
   * Runs API Tests from the TestAPI Plug-in.
   * @param {string} testName - Arguments for Running Tests - eg. Name of Test/Suite.
   * @returns {void}
   */
  runAPITest = function (testName) {};
  /**
   * Saves a new workspace.
   * @param {string} workspaceName - Workspace Name.
   * @returns {boolean}
   */
  saveWorkspace = function (workspaceName) {};
  /**
   * Sends the script message to the required plugin.
   * @param {string} pluginName - Plugin to which message needs to be sent.
   * @param {string} messageSelector - Functionality that is to be executed.
   * @param {string} inputString - Pass any data encoded in a string.
   * @returns {string}
   */
  sendScriptMessage = function (pluginName, messageSelector, inputString) {};
  /**
   * For Internal Use.
   * @param {any} options - Options for the PNG24 export.
   * @returns {void}
   */
  setThumbnailOptionsForCloudLibrary = function (options) {};
  /**
   * Invokes application's color picker.
   * @param {Color} color - The color to load in the color picker initially.
   * @returns {Color}
   */
  showColorPicker = function (color) {};
  /**
   * Get presets from the file.
   * @param {File} fileSpec - File spec to import from.
   * @returns {string[]}
   */
  showPresets = function (fileSpec) {};
  /**
   * Switches between workspaces.
   * @param {string} workspaceName - Workspace Name.
   * @returns {boolean}
   */
  switchWorkspace = function (workspaceName) {};
  /**
   * Translate the placeholder text to regular text. A method to enter unicode points in hex values.
   * @param {string} text - The placeholder text to be translated.
   * @returns {string}
   */
  translatePlaceholderText = function (text) {};
  /**
   * Returns a string translated from the key and source data passed in.
   * @param {string} key - The string to translate.
   * @param {string} source - The plugin name from the source of the key.
   * @returns {string}
   */
  translateString = function (key, source) {};
  /**
   * Undo the last transaction.
   * @returns {void}
   */
  undo = function () {};
  /**
   * Unloads an action into action palette.
   * @param {string} setName - Name of the set to be unloaded.
   * @param {string} actionName - Name of the action to be unloaded.
   * @returns {void}
   */
  unloadAction = function (setName, actionName) {};
}

/**
 * A document.
 * @name Document
 * @class
 */
class AiDocument {
  /** @type {string} - The XMP packet string associated with the document. */
  XMPString;
  /** @type {DataSet} - The active data set. */
  activeDataSet;
  /** @type {Layer} - The active layer. */
  activeLayer;
  /** @readonly @type {View} - The document's current view. */
  activeView;
  /** @readonly @type {Artboards} - All artboards in the document. */
  artboards;
  /** @readonly @type {Brushes} - The brushes defined in this document. */
  brushes;
  /** @readonly @type {CharacterStyles} - The list of character styles in this document. */
  characterStyles;
  /** @readonly @type {string} - The name of the color profile of the document. */
  colorProfileName;
  /** @readonly @type {CompoundPathItems} - The compound path artwork in this collection. */
  compoundPathItems;
  /** @type {Rect} - */
  cropBox;
  /** @type {CropOptions} - */
  cropStyle;
  /** @readonly @type {DataSets} - The data sets defined in this document. */
  dataSets;
  /** @type {Color} - Default fill color. */
  defaultFillColor;
  /** @type {boolean} - Will art beneath a filled object be overprinted by default? */
  defaultFillOverprint;
  /** @type {boolean} - Should a new path be filled? */
  defaultFilled;
  /** @type {StrokeCap} - Default type of line capping. */
  defaultStrokeCap;
  /** @type {Color} - Default stroke color. */
  defaultStrokeColor;
  /** @type {number} - The default distance into the dash pattern at which the pattern should be started. */
  defaultStrokeDashOffset;
  /** @type {number[]} - Default dash lengths (set to {} for a solid line) */
  defaultStrokeDashes;
  /** @type {StrokeJoin} - Default type of joints. */
  defaultStrokeJoin;
  /** @type {number} - Specifies whether a join is mitered (pointed) or beveled (squared-off) by default. */
  defaultStrokeMiterLimit;
  /** @type {boolean} - Will art beneath a stroked object be overprinted by default? */
  defaultStrokeOverprint;
  /** @type {number} - Default width of stroke. */
  defaultStrokeWidth;
  /** @type {boolean} - Should a new path be stroked? */
  defaultStroked;
  /** @readonly @type {DocumentColorSpace} - The color space used for the document. */
  documentColorSpace;
  /** @readonly @type {EmbeddedItems} - The embedded art items in this layer. */
  embeddedItems;
  /** @readonly @type {File} - The file associated with the document. */
  fullName;
  /** @readonly @type {Rect} - The bounds of the illustration excluding stroke width. */
  geometricBounds;
  /** @readonly @type {Gradients} - The gradients available in this document. */
  gradients;
  /** @readonly @type {GraphItems} - The graph art items in this document. */
  graphItems;
  /** @readonly @type {ArtStyles} - The graphic styles defined in this document. */
  graphicStyles;
  /** @readonly @type {GroupItems} - The group items in this document. */
  groupItems;
  /** @readonly @type {number} - */
  height;
  /** @readonly @type {Ink[]} - The list of inks in this document. */
  inkList;
  /** @readonly @type {string[]} - The Kinsoku set. */
  kinsokuSet;
  /** @readonly @type {Layers} - The layers in this document. */
  layers;
  /** @readonly @type {LegacyTextItems} - The text frame items in this story. */
  legacyTextItems;
  /** @readonly @type {MeshItems} - The mesh art items in this document. */
  meshItems;
  /** @readonly @type {string[]} - The Mojikumi set. */
  mojikumiSet;
  /** @readonly @type {string} - The document's name. */
  name;
  /** @readonly @type {NonNativeItems} - The non-native art items in this document. */
  nonNativeItems;
  /** @readonly @type {number} - */
  outputResolution;
  /** @readonly @type {PageItems} - All the artwork in this document. */
  pageItems;
  /** @type {Point | [number, number]} - */
  pageOrigin;
  /** @readonly @type {ParagraphStyles} - The list of paragraph styles in this document. */
  paragraphStyles;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {File} - Path specification for the document. */
  path;
  /** @readonly @type {PathItems} - The path artwork in this document. */
  pathItems;
  /** @readonly @type {Patterns} - The patterns available in this document. */
  patterns;
  /** @readonly @type {PlacedItems} - The placed art items in this document. */
  placedItems;
  /** @readonly @type {PluginItems} - The plugin art items in this document. */
  pluginItems;
  /** @readonly @type {boolean} - */
  printTiles;
  /** @type {RasterEffectOptions} - The document raster effects settings. */
  rasterEffectSettings;
  /** @readonly @type {RasterItems} - The raster art items in this document. */
  rasterItems;
  /** @type {Point | [number, number]} - */
  rulerOrigin;
  /** @readonly @type {RulerUnits} - */
  rulerUnits;
  /** @type {boolean} - Has the document been saved? */
  saved;
  /** @type {any} - The selection within the document. */
  selection;
  /** @readonly @type {boolean} - */
  showPlacedImages;
  /** @readonly @type {boolean} - */
  splitLongPaths;
  /** @readonly @type {Spots} - The custom spot colors available in this document. */
  spots;
  /** @readonly @type {boolean} - Is the file a stationery file? */
  stationery;
  /** @readonly @type {Stories} - The story items in this document. */
  stories;
  /** @readonly @type {SwatchGroups} - The Swatch Groups in this document. */
  swatchGroups;
  /** @readonly @type {Swatches} - The swatches in this document. */
  swatches;
  /** @readonly @type {SymbolItems} - The symbol items in this document. */
  symbolItems;
  /** @readonly @type {Symbols} - The symbols defined in this document. */
  symbols;
  /** @readonly @type {Tags} - The tags in this document. */
  tags;
  /** @readonly @type {TextFrameItems} - The text frame items in this document. */
  textFrames;
  /** @readonly @type {boolean} - */
  tileFullPages;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @readonly @type {boolean} - */
  useDefaultScreen;
  /** @readonly @type {Variables} - The variables defined in this document. */
  variables;
  /** @type {boolean} - The locked variables. */
  variablesLocked;
  /** @readonly @type {Views} - The views in this document. */
  views;
  /** @readonly @type {Rect} - The visible bounds of the illustration including stroke width. */
  visibleBounds;
  /** @readonly @type {number} - */
  width;
  /**
   * Activate the first window associated with the document.
   * @returns {void}
   */
  activate = function () {};
  /**
   * Close the specified document(s)
   * @param {SaveOptions} [saving] - Specifies whether changes should be saved before closing.
   * @returns {void}
   */
  close = function (saving) {};
  /**
   * Converts the coordinate system of a single point from one coordinate system to another.
   * @param {Point | [number,number]} coordinate - The Coordinate to convert.
   * @param {CoordinateSystem} source - The source coordinate system.
   * @param {CoordinateSystem} destination - The destination coordinate system.
   * @returns {Point | [number, number]}
   */
  convertCoordinate = function (coordinate, source, destination) {};
  /**
   * Export the specified document(s)
   * @param {File} exportFile - The file to export the document to.
   * @param {ExportType} exportFormat - The file type to export the document as.
   * @param {any} [options] - Options for the file type specified.
   * @returns {void}
   */
  exportFile = function (exportFile, exportFormat, options) {};
  /**
   * Save all PDF presets to a file.
   * @param {File} file - File to export to.
   * @returns {void}
   */
  exportPDFPreset = function (file) {};
  /**
   * Saves all perspective grid presets to a file.
   * @param {File} file - File to export to.
   * @returns {void}
   */
  exportPerspectiveGridPreset = function (file) {};
  /**
   * Export the current print setting to the preset file.
   * @param {File} file - File to export to.
   * @returns {void}
   */
  exportPrintPreset = function (file) {};
  /**
   * Export the selection as Ai file.
   * @param {File} exportFile - The file to export the selection to.
   * @returns {void}
   */
  exportSelectionAsAi = function (exportFile) {};
  /**
   * Export the selection as PNG file.
   * @param {File} exportFile - The file to export the selection to.
   * @param {any} [options] - Options for the PNG24 export.
   * @returns {void}
   */
  exportSelectionAsPNG = function (exportFile, options) {};
  /**
   * Save datasets into an XML library. The datasets contain variables and their associated dynamic data.
   * @param {File} file - File spec to export to.
   * @returns {void}
   */
  exportVariables = function (file) {};
  /**
   * Change the artboard to selected art bounds.
   * @param {number} [index] - The index of the artboard to update.
   * @returns {boolean}
   */
  fitArtboardToSelectedArt = function (index) {};
  /**
   * Gets the active plane of the active perspective grid of the document.
   * @returns {PerspectiveGridPlaneType}
   */
  getPerspectiveActivePlane = function () {};
  /**
   * Hides the current active perspective grid for the document, if there is visible perspective grid.
   * @returns {boolean}
   */
  hidePerspectiveGrid = function () {};
  /**
   * Capture the artwork content inside the clip bound as raster image, and write out the captured image data into the target image file.
   * @param {File} imageFile - The file to which the captured image should be written.
   * @param {Rect} [clipBounds] - The rectangular region of the artwork for image capture. If the parameter is omitted, the entire artwork bound is captured.
   * @param {ImageCaptureOptions} [options] - Describes the image capture options.
   * @returns {void}
   */
  imageCapture = function (imageFile, clipBounds, options) {};
  /**
   * Load the character styles from the Illustrator file.
   * @param {File} fileSpec - File spec to import from.
   * @returns {void}
   */
  importCharacterStyles = function (fileSpec) {};
  /**
   * Import the file into current Ai document.
   * @param {File} importFile - The file to import in the current document.
   * @param {boolean} isLinked - Is AssetLiveLinked.
   * @param {string} [libraryName] - For Internal Use.
   * @param {string} [itemName] - For Internal Use.
   * @param {string} [elementRef] - For Internal Use.
   * @param {number} [modifiedTime] - For Internal Use.
   * @param {number} [creationTime] - For Internal Use.
   * @param {string} [adobeStockId] - For Internal Use.
   * @param {string} [adobeStockLicense] - For Internal Use.
   * @returns {void}
   */
  importFile = function (importFile, isLinked, libraryName, itemName, elementRef, modifiedTime, creationTime, adobeStockId, adobeStockLicense) {};
  /**
   * Load all PDF presets from a file.
   * @param {File} fileSpec - File to import from.
   * @param {boolean} [replacingPreset] - Should existing editable presets be replaced?
   * @returns {void}
   */
  importPDFPreset = function (fileSpec, replacingPreset) {};
  /**
   * Load the paragraph styles from the Illustrator file.
   * @param {File} fileSpec - File spec to import from.
   * @returns {void}
   */
  importParagraphStyles = function (fileSpec) {};
  /**
   * Loads mentioned perspective grid preset, if preset name is specified, else loads all(if no preset name is specified) presets, from the specified file.
   * @param {File} fileSpec - File to import from.
   * @param {string} [perspectivePreset] - Name of perspective grid preset.
   * @returns {void}
   */
  importPerspectiveGridPreset = function (fileSpec, perspectivePreset) {};
  /**
   * Apply the named print preset from the file to the current print setting.
   * @param {string} printPreset - The name of a print preset to import.
   * @param {File} fileSpec - File to import from.
   * @returns {void}
   */
  importPrintPreset = function (printPreset, fileSpec) {};
  /**
   * Import a library containing datasets, variables and their associated dynamic data. Importing variables will overwrite existing variables and datasets.
   * @param {File} fileSpec - File spec to import from.
   * @returns {void}
   */
  importVariables = function (fileSpec) {};
  /**
   * Print the document.
   * @param {PrintOptions} [options] - Print options.
   * @returns {void}
   */
  print = function (options) {};
  /**
   * Process a gesture based on input points.
   * @param {string} gesturePointsFile - File Path containing points constituting the gesture.
   * @returns {void}
   */
  processGesture = function (gesturePointsFile) {};
  /**
   * Rasterize the source art(s) within the specified clip bounds. The source art(s) are disposed as a result of the rasterization.
   * @param {any} sourceArt - The page item(s) to be rasterized.
   * @param {Rect} [clipBounds] - The rectangular region of the artwork for the rasterization. If the parameter is omitted, the bounds of the source art(s) is used instead.
   * @param {RasterizeOptions} [options] - Describes the rasterization options.
   * @returns {RasterItem}
   */
  rasterize = function (sourceArt, clipBounds, options) {};
  /**
   * Rearrange Artboards in the document.
   * @param {DocumentArtboardLayout} [artboardLayout] - Layout of artboards for rearrangement.
   * @param {number} [artboardRowsOrCols] - Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
   * @param {number} [artboardSpacing] - Spacing between artboards.
   * @param {boolean} [artboardMoveArtwork] - Whether to move artwork with artboards.
   * @returns {boolean}
   */
  rearrangeArtboards = function (artboardLayout, artboardRowsOrCols, artboardSpacing, artboardMoveArtwork) {};
  /**
   * Save the document.
   * @returns {void}
   */
  save = function () {};
  /**
   * Save the document with specific save options.
   * @param {File} saveIn - The file to save the document in.
   * @param {any} [options] - Options for the file type specified.
   * @returns {void}
   */
  saveAs = function (saveIn, options) {};
  /**
   * Select art objects in active artboard.
   * @returns {boolean}
   */
  selectObjectsOnActiveArtboard = function () {};
  /**
   * Selects a predefined preset to define grid for the current document.
   * @param {string} perspectivePreset - Name of perspective grid preset.
   * @returns {boolean}
   */
  selectPerspectivePreset = function (perspectivePreset) {};
  /**
   * Sets the active perspective plane for the active grid of the document.
   * @param {PerspectiveGridPlaneType} perspectiveGridPlane - Type of perspective grid plane.
   * @returns {boolean}
   */
  setPerspectiveActivePlane = function (perspectiveGridPlane) {};
  /**
   * Shows the current active perspective grid for the document, if no active perspective grid then shows the default perspective grid for the document.
   * @returns {boolean}
   */
  showPerspectiveGrid = function () {};
  /**
   * Capture the current document window to the target TIFF image file.
   * @param {File} imageFile - The TIFF file to which the captured image should be written.
   * @param {Point | [number,number]} windowSize - The size to make the window before capture.
   * @returns {void}
   */
  windowCapture = function (imageFile, windowSize) {};
}

/**
 * A layer.
 * @name Layer
 * @class
 */
class Layer {
  /** @readonly @type {number} - The absolute drawing order of the layer. */
  absoluteZOrderPosition;
  /** @type {KnockoutState} - Is the artwork used to create a knockout. */
  artworkKnockout;
  /** @type {BlendModes} - The mode used when compositing an object. */
  blendingMode;
  /** @type {RGBColor} - Color used when outlining artwork in this layer. */
  color;
  /** @readonly @type {CompoundPathItems} - The compound path artwork in this layer. */
  compoundPathItems;
  /** @type {boolean} - Is rendered as dimmed in this layer? */
  dimPlacedImages;
  /** @readonly @type {GraphItems} - The graph art items in this layer. */
  graphItems;
  /** @readonly @type {GroupItems} - The group items in this layer. */
  groupItems;
  /** @type {boolean} - Is any artwork in this layer selected? Setting this property to false deselects all artwork in the layer. */
  hasSelectedArtwork;
  /** @type {boolean} - Is the artwork isolated. */
  isIsolated;
  /** @readonly @type {Layers} - Nested layers. */
  layers;
  /** @readonly @type {LegacyTextItems} - The text frame items in this story. */
  legacyTextItems;
  /** @type {boolean} - Is the layer editable? */
  locked;
  /** @readonly @type {MeshItems} - The mesh art items in this layer. */
  meshItems;
  /** @type {string} - The layer's name. */
  name;
  /** @readonly @type {NonNativeItems} - The non-native art items in this layer. */
  nonNativeItems;
  /** @type {number} - The layer's opacity (between 0.0 and 100.0) */
  opacity;
  /** @readonly @type {PageItems} - All the artwork in this layer. */
  pageItems;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {PathItems} - The path artwork in this layer. */
  pathItems;
  /** @readonly @type {PlacedItems} - The placed art items in this layer. */
  placedItems;
  /** @readonly @type {PluginItems} - The plugin art items in this layer. */
  pluginItems;
  /** @type {boolean} - Is the layer rendered in preview mode? */
  preview;
  /** @type {boolean} - Is the layer printable? */
  printable;
  /** @readonly @type {RasterItems} - The raster art items in this layer. */
  rasterItems;
  /** @type {boolean} - Is the layer sliced (default: false) */
  sliced;
  /** @readonly @type {SymbolItems} - The symbol items in this layer. */
  symbolItems;
  /** @readonly @type {TextFrameItems} - The text frame items in this layer. */
  textFrames;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @type {boolean} - Is the layer visible? */
  visible;
  /** @readonly @type {number} - The drawing order of the layer. */
  zOrderPosition;
  /**
   * Move the object.
   * @param relativeObject
   * @param insertionLocation
   * @returns {Layer}
   */
  move = function (relativeObject, insertionLocation) {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
  /**
   * Arranges the layer relative to other layers.
   * @param {ZOrderMethod} zOrderCmd - How to arrange the layer.
   * @returns {void}
   */
  zOrder = function (zOrderCmd) {};
}

/**
 * A view.
 * @name View
 * @class
 */
class View {
  /** @readonly @type {Rect} - The bounding rectangle of this view. */
  bounds;
  /** @type {Point | [number, number]} - The center point of this view. */
  centerPoint;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {ScreenMode} - The mode of display. */
  screenMode;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @type {number} - The zoom factor of this view. */
  zoom;
}

/**
 * A gradient.
 * @name Gradient
 * @class
 */
class Gradient {
  /** @readonly @type {GradientStops} - The stops in this gradient. */
  gradientStops;
  /** @type {string} - The gradient's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {GradientType} - The gradient type. */
  type;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * A gradient stop.
 * @name GradientStop
 * @class
 */
class GradientStop {
  /** @type {Color} - The color linked to this gradient stop. */
  color;
  /** @type {number} - Midpoint key value in percent. */
  midPoint;
  /** @type {number} - The opacity (between 0.0 and 100.0) value for the gradient stop. */
  opacity;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {number} - Location of color in the blend (in percent) */
  rampPoint;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * Preferences for Illustrator.
 * @name Preferences
 * @class
 */
class Preferences {
  /** @readonly @type {OpenOptionsAutoCAD} - Options to use when opening or placing a AutoCAD file. */
  AutoCADFileOptions;
  /** @readonly @type {OpenOptionsPDF} - Options to use when opening or placing a PDF file. */
  PDFFileOptions;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {OpenOptionsPhotoshop} - Options to use when opening or placing a Photoshop file. */
  photoshopFileOptions;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Retrieve the value of the application preference key as boolean.
   * @param {string} key - The preference key.
   * @returns {boolean}
   */
  getBooleanPreference = function (key) {};
  /**
   * Retrieve the value of the application preference key as integer.
   * @param {string} key - The preference key.
   * @returns {number}
   */
  getIntegerPreference = function (key) {};
  /**
   * Retrieve the value of the application preference key as real number.
   * @param {string} key - The preference key.
   * @returns {number}
   */
  getRealPreference = function (key) {};
  /**
   * Retrieve the value of the application preference key as string type.
   * @param {string} key - The preference key.
   * @returns {string}
   */
  getStringPreference = function (key) {};
  /**
   * Delete the application preference key.
   * @param {string} key - The preference key.
   * @returns {void}
   */
  removePreference = function (key) {};
  /**
   * Set the value of the application preference key as boolean.
   * @param {string} key - The preference key.
   * @param {boolean} value - The boolean value of the preference key.
   * @returns {void}
   */
  setBooleanPreference = function (key, value) {};
  /**
   * Set the value of the application preference key as integer.
   * @param {string} key - The preference key.
   * @param {number} value - The boolean value of the preference key.
   * @returns {void}
   */
  setIntegerPreference = function (key, value) {};
  /**
   * Set the value of the application preference key as real number.
   * @param {string} key - The preference key.
   * @param {number} value - The real value of the preference key.
   * @returns {void}
   */
  setRealPreference = function (key, value) {};
  /**
   * Set the value of the application preference key as string type.
   * @param {string} key - The preference key.
   * @param {string} value - The string value of the preference key.
   * @returns {void}
   */
  setStringPreference = function (key, value) {};
}

/**
 * A custom color.
 * @name Spot
 * @class
 */
class Spot {
  /** @type {Color} - */
  color;
  /** @type {ColorModel} - Type of the custom color. */
  colorType;
  /** @type {string} - The custom color's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {SpotColorKind} - Kind of the spot color (i.e. RGB, CMYK or LAB), it is the name of color kind contained in spot. */
  spotKind;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Gets the internal color of a spot.
   * @returns {number[]}
   */
  getInternalColor = function () {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * Dynamic object used to create data-driven graphics.
 * @name Variable
 * @class
 */
class Variable {
  /** @type {VariableKind} - The variable's type. */
  kind;
  /** @type {string} - The name of this variable. */
  name;
  /** @readonly @type {PageItems} - All the artwork in this document. */
  pageItems;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * A set of variables and their associated dynamic data which will be used for dynamic publishing.
 * @name DataSet
 * @class
 */
class DataSet {
  /** @type {string} - The name of this dataset. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Displays the dynamic data that has been captured in the dataset.
   * @returns {void}
   */
  display = function () {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
  /**
   * Re-apply the dynamic data of the active dataset to the artboard.
   * @returns {void}
   */
  update = function () {};
}

/**
 * A color swatch.
 * @name Swatch
 * @class
 */
class Swatch {
  /** @type {Color} - The color information of the swatch. */
  color;
  /** @type {string} - The swatch's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * A Swatch group.
 * @name SwatchGroup
 * @class
 */
class SwatchGroup {
  /** @type {string} - Name of the swatch group. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Add a spot swatch to the group.
   * @param {Spot} spot - The spot swatch to be added to the group.
   * @returns {void}
   */
  addSpot = function (spot) {};
  /**
   * Add a swatch to the group.
   * @param {Swatch} swatch - The swatch to be added to the group.
   * @returns {void}
   */
  addSwatch = function (swatch) {};
  /**
   * Get all swatches in the swatch group.
   * @returns {Swatch[]}
   */
  getAllSwatches = function () {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * A pattern.
 * @name Pattern
 * @class
 */
class Pattern {
  /** @type {string} - The pattern's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * A symbol.
 * @name Symbol
 * @class
 */
class Symbol {
  /** @type {string} - The symbol's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Duplicate this object.
   * @param relativeObject
   * @param insertionLocation
   * @returns {Symbol}
   */
  duplicate = function (relativeObject, insertionLocation) {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * A brush.
 * @name Brush
 * @class
 */
class Brush {
  /** @type {string} - The brush's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Apply a brush or art style to object(s)
   * @param {any} artItem - The page item(s) to apply to.
   * @returns {void}
   */
  applyTo = function (artItem) {};
}

/**
 * An art style.
 * @name ArtStyle
 * @class
 */
class ArtStyle {
  /** @type {string} - The art style's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Apply a brush or art style to object(s)
   * @param {any} artItem - The page item(s) to apply to.
   * @returns {void}
   */
  applyTo = function (artItem) {};
  /**
   * Merge an art style to object(s) current style(s)
   * @param {any} artItem - The page item(s) to merge to.
   * @returns {void}
   */
  mergeTo = function (artItem) {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * An installed font.
 * @name TextFont
 * @class
 */
class TextFont {
  /** @readonly @type {string} - The font's family name. */
  family;
  /** @readonly @type {string} - The font's full name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The font's style name. */
  style;
  /** @readonly @type {string} - The class name of the object. */
  typename;
}

/**
 * A page item object.
 * @name PageItem
 * @class
 */
class PageItem {
  /** @type {string} - The value of the Adobe URL tag assigned to this artwork item. */
  URL;
  /** @readonly @type {number} - The absolute drawing order of the layer. */
  absoluteZOrderPosition;
  /** @type {KnockoutState} - Is the artwork used to create a knockout. */
  artworkKnockout;
  /** @type {BlendModes} - The mode used when compositing an object. */
  blendingMode;
  /** @readonly @type {Rect} - The bounds of the artwork including stroke width and controls. */
  controlBounds;
  /** @readonly @type {boolean} - Can the art item be modified. */
  editable;
  /** @readonly @type {Rect} - The bounds of the artwork excluding stroke width. */
  geometricBounds;
  /** @type {number} - The height of the art item. */
  height;
  /** @type {boolean} - Is this artwork item hidden? */
  hidden;
  /** @type {boolean} - Is the artwork isolated. */
  isIsolated;
  /** @readonly @type {Layer} - The layer to which this artwork belongs. */
  layer;
  /** @type {number} - The left position of the art item. */
  left;
  /** @type {boolean} - Is this artwork item locked? */
  locked;
  /** @type {string} - The item's name. */
  name;
  /** @type {string} - The note assigned to this artwork item. */
  note;
  /** @type {number} - The object's opacity (between 0.0 and 100.0) */
  opacity;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {boolean} - Is this artwork item aligned to Pixel Grid? */
  pixelAligned;
  /** @type {Point | [number, number]} - The position of the top left corner of the art item. */
  position;
  /** @type {boolean} - Is this artwork item selected? */
  selected;
  /** @type {boolean} - Is the art item sliced (default: false) */
  sliced;
  /** @readonly @type {Tags} - The collection of tags associated with this page item. */
  tags;
  /** @type {number} - The top position of the art item. */
  top;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @type {any} - The visibility variable bound to this page item. */
  visibilityVariable;
  /** @readonly @type {Rect} - The visible bounds of the artwork including stroke width. */
  visibleBounds;
  /** @type {number} - The width of the art item. */
  width;
  /** @type {boolean} - Should the text frame object be wrapped inside this object? */
  wrapInside;
  /** @type {number} - Use this offset when wrapping text around this object. */
  wrapOffset;
  /** @type {boolean} - Wrap text frame objects around this object (text frame must be above the object) */
  wrapped;
  /** @readonly @type {number} - The drawing order of the art within it's group or layer. */
  zOrderPosition;
  /**
   * Apply effect to selected artItem.
   * @param liveEffectXML
   * @returns {void}
   */
  applyEffect = function (liveEffectXML) {};
  /**
   * Place art object(s)in perspective grid at spedified perspective plane and coordinate.
   * @param {number} positionX - Position towards X direction of specified or active perspective grid plane.
   * @param {number} positionY - Position towards Y direction of specified or active perspective grid plane.
   * @param {PerspectiveGridPlaneType} perspectiveGridPlane - Type of perspective grid plane.
   * @returns {void}
   */
  bringInPerspective = function (positionX, positionY, perspectiveGridPlane) {};
  /**
   * Duplicate this object.
   * @param relativeObject
   * @param insertionLocation
   * @returns {PageItem}
   */
  duplicate = function (relativeObject, insertionLocation) {};
  /**
   * Move the object.
   * @param relativeObject
   * @param insertionLocation
   * @returns {PageItem}
   */
  move = function (relativeObject, insertionLocation) {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
  /**
   * Scale art object(s)
   * @param {number} scaleX - Horizontal scaling factor expressed as a percentage (100 = 100%)
   * @param {number} scaleY - Vertical scaling factor expressed as a percentage (100 = 100%)
   * @param {boolean} [changePositions] - Are art object positions and orientations effected?
   * @param {boolean} [changeFillPatterns] - Are the fill patterns assigned to paths to be transformed?
   * @param {boolean} [changeFillGradients] - Are the fill gradients assigned to paths to be transformed?
   * @param {boolean} [changeStrokePattern] - Are the stroke patterns assigned to paths to be transformed?
   * @param {number} [changeLineWidths] - The amount line widths are to be scaled (expressed as a percentage)
   * @param {Transformation} [scaleAbout] - The point on the art item's bounding box to which the scale is applied.
   * @returns {void}
   */
  resize = function (scaleX, scaleY, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, scaleAbout) {};
  /**
   * Rotate art object(s)
   * @param {number} angle - Angle of rotation (in degrees). Rotation is performed counter-clock wise.
   * @param {boolean} [changePositions] - Are art object positions and orientations effected?
   * @param {boolean} [changeFillPatterns] - Are the fill patterns assigned to paths to be transformed?
   * @param {boolean} [changeFillGradients] - Are the fill gradients assigned to paths to be transformed?
   * @param {boolean} [changeStrokePattern] - Are the stroke patterns assigned to paths to be transformed?
   * @param {Transformation} [rotateAbout] - The point on the art item's bounding box to which the rotation is applied.
   * @returns {void}
   */
  rotate = function (angle, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, rotateAbout) {};
  /**
   * Sends the script message to the required plugin.
   * @param {string} pluginName - Plugin to which message needs to be sent.
   * @param {string} messageSelector - Functionality that is to be executed.
   * @param {string} inputString - Pass any data encoded in a string.
   * @returns {string}
   */
  sendScriptMessage = function (pluginName, messageSelector, inputString) {};
  /**
   * Transform art object(s) using a transformation matrix.
   * @param {Matrix} transformationMatrix - The transformation matrix to be applied to the objects.
   * @param {boolean} [changePositions] - Are art object positions and orientations effected?
   * @param {boolean} [changeFillPatterns] - Are the fill patterns assigned to paths to be transformed?
   * @param {boolean} [changeFillGradients] - Are the fill gradients assigned to paths to be transformed?
   * @param {boolean} [changeStrokePattern] - Are the stroke patterns assigned to paths to be transformed?
   * @param {number} [changeLineWidths] - The amount line widths are to be scaled (expressed as a percentage)
   * @param {Transformation} [transformAbout] - The point on the art item's bounding box to which scale and rotation operations apply.
   * @returns {void}
   */
  transform = function (transformationMatrix, changePositions, changeFillPatterns, changeFillGradients, changeStrokePattern, changeLineWidths, transformAbout) {};
  /**
   * Reposition art object(s)
   * @param {number} [deltaX] - Horizontal transformation.
   * @param {number} [deltaY] - Vertical transformation.
   * @param {boolean} [transformObjects] - Are art object positions and orientations affected?
   * @param {boolean} [transformFillPatterns] - Are the fill patterns assigned to paths to be transformed?
   * @param {boolean} [transformFillGradients] - Are the fill gradients assigned to paths to be transformed?
   * @param {boolean} [transformStrokePattern] - Are the stroke patterns assigned to paths to be transformed?
   * @returns {void}
   */
  translate = function (deltaX, deltaY, transformObjects, transformFillPatterns, transformFillGradients, transformStrokePattern) {};
  /**
   * Arranges the art relative to other art in the group or layer.
   * @param {ZOrderMethod} zOrderCmd - How to arrange the art.
   * @returns {void}
   */
  zOrder = function (zOrderCmd) {};
}

/**
 * Compound path artwork item.
 * @name CompoundPathItemJSDocType
 * @class
 */
class CompoundPathItemJSDocType {
  /** @readonly @type {PathItems} - The path artwork in this compound path. */
  pathItems;
}

/**
 * @typedef {PageItem & CompoundPathItemJSDocType} CompoundPathItem
*/

/**
 * A tag associated with a piece of artwork.
 * @name Tag
 * @class
 */
class Tag {
  /** @type {string} - The tag's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @type {string} - The data stored in this tag. */
  value;
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * An artwork path item.
 * @name PathItemJSDocType
 * @class
 */
class PathItemJSDocType {
  /** @readonly @type {number} - The area of this path in square points. */
  area;
  /** @type {boolean} - Should this be used as a clipping path? */
  clipping;
  /** @type {boolean} - Is this path closed? */
  closed;
  /** @type {boolean} - Should the even-odd rule be used to determine insideness? */
  evenodd;
  /** @type {Color} - Fill color. */
  fillColor;
  /** @type {boolean} - Will art beneath a filled object be overprinted? */
  fillOverprint;
  /** @type {boolean} - Should the path be filled? */
  filled;
  /** @type {boolean} - Is this path a guide object? */
  guides;
  /** @readonly @type {number} - The length of this path in points. */
  length;
  /** @readonly @type {PathPoints} - */
  pathPoints;
  /** @type {PolarityValues} - The polarity the path. */
  polarity;
  /** @type {number} - The resolution of the path. */
  resolution;
  /** @readonly @type {PathPoints} - All the selected points in the path. */
  selectedPathPoints;
  /** @type {StrokeCap} - Type of line capping. */
  strokeCap;
  /** @type {Color} - Stroke color. */
  strokeColor;
  /** @type {number} - The default distance into the dash pattern at which the pattern should be started. */
  strokeDashOffset;
  /** @type {number[]} - Dash lengths (set to {} for a solid line) */
  strokeDashes;
  /** @type {StrokeJoin} - Type of joints. */
  strokeJoin;
  /** @type {number} - Whether a join is mitered (pointed) or beveled (squared-off) */
  strokeMiterLimit;
  /** @type {boolean} - Will art beneath a stroked object be overprinted? */
  strokeOverprint;
  /** @type {number} - Width of stroke. */
  strokeWidth;
  /** @type {boolean} - Should the path be stroked? */
  stroked;
  /**
   * Set the path using the provided array of path point (x, y) coordinate pairs.
   * @param {[number,number][]} pathPoints - Array of (x, y) coordinate pairs for the path points.
   * @returns {void}
   */
  setEntirePath = function (pathPoints) {};
}

/**
 * @typedef {PageItem & PathItemJSDocType} PathItem
*/

/**
 * A point on a path.
 * @name PathPoint
 * @class
 */
class PathPoint {
  /** @type {Point | [number, number]} - The position (coordinates) of the anchor point. */
  anchor;
  /** @type {Point | [number, number]} - Location of the left direction point (in position) */
  leftDirection;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {PointType} - The type of point: smooth/corner. */
  pointType;
  /** @type {Point | [number, number]} - Location of the right direction point (out position) */
  rightDirection;
  /** @type {PathPointSelection} - The path point selected state. */
  selected;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * Raster artwork item.
 * @name RasterItemJSDocType
 * @class
 */
class RasterItemJSDocType {
  /** @readonly @type {number} - The number of bits per channel. */
  bitsPerChannel;
  /** @type {Rect} - Dimensions of raster art object regardless of transformations. */
  boundingBox;
  /** @readonly @type {number} - The number of image channels. */
  channels;
  /** @readonly @type {string[]} - List of colorant names. */
  colorants;
  /** @readonly @type {boolean} - Is the raster art a colorized grayscale image? */
  colorizedGrayscale;
  /** @type {any} - The content variable bound to this raster art object. */
  contentVariable;
  /** @type {boolean} - Is the raster art embedded within the illustration? */
  embedded;
  /** @readonly @type {File} - The file containing the raster artwork. */
  file;
  /** @readonly @type {ImageColorSpace} - The color space of the raster image. */
  imageColorSpace;
  /** @type {Matrix} - The transformation matrix of the raster art object. */
  matrix;
  /** @type {boolean} - Is the raster art overprinting? */
  overprint;
  /** @readonly @type {RasterLinkState} - Status of the linked image. */
  status;
  /** @readonly @type {boolean} - Is the raster art transparent? */
  transparent;
  /**
   * Colorize the RasterItem with a CMYK or RGB Color.
   * @param {Color} rasterColor - The color to use for coloring the TIFF image.
   * @returns {void}
   */
  colorize = function (rasterColor) {};
  /**
   * Trace this raster object using default options. Reorders this raster to the source art.
   * @returns {PluginItem}
   */
  trace = function () {};
}

/**
 * @typedef {PageItem & RasterItemJSDocType} RasterItem
*/

/**
 * Placed artwork item.
 * @name PlacedItemJSDocType
 * @class
 */
class PlacedItemJSDocType {
  /** @readonly @type {Rect} - Dimensions of placed art object, regardless of transformations. */
  boundingBox;
  /** @type {any} - The content variable bound to this placed art object. */
  contentVariable;
  /** @type {File} - The file containing the placed artwork. */
  file;
  /** @type {Matrix} - The transformation matrix of the placed art object. */
  matrix;
  /**
   * Embed the placed art within the illustration.
   * @returns {void}
   */
  embed = function () {};
  /**
   * Relink the placed art with supplied art from file.
   * @param {File} fileSpec - File spec to relink from.
   * @returns {void}
   */
  relink = function (fileSpec) {};
  /**
   * Trace this raster object using default options. Reorders this placed to the source art.
   * @returns {PluginItem}
   */
  trace = function () {};
}

/**
 * @typedef {PageItem & PlacedItemJSDocType} PlacedItem
*/

/**
 * Embedded artwork item.
 * @name EmbedItemJSDocType
 * @class
 */
class EmbedItemJSDocType {
  /** @type {File} - The file containing the placed artwork. */
  file;
}

/**
 * @typedef {PageItem & EmbedItemJSDocType} EmbedItem
*/

/**
 * Graph artwork item.
 * @name GraphItemJSDocType
 * @class
 */
class GraphItemJSDocType {
  /** @type {any} - The content variable bound to this graph. */
  contentVariable;
}

/**
 * @typedef {PageItem & GraphItemJSDocType} GraphItem
*/

/**
 * Non-native artwork item.
 * @name NonNativeItemJSDocType
 * @class
 */
class NonNativeItemJSDocType {}

/**
 * @typedef {PageItem & NonNativeItemJSDocType} NonNativeItem
*/

/**
 * Mesh artwork item.
 * @name MeshItemJSDocType
 * @class
 */
class MeshItemJSDocType {}

/**
 * @typedef {PageItem & MeshItemJSDocType} MeshItem
*/

/**
 * Plugin artwork item.
 * @name PluginItemJSDocType
 * @class
 */
class PluginItemJSDocType {
  /** @readonly @type {boolean} - Is the plugin group a tracing? */
  isTracing;
  /** @readonly @type {TracingObject} - The tracing object associated with this plugin item. */
  tracing;
}

/**
 * @typedef {PageItem & PluginItemJSDocType} PluginItem
*/

/**
 * An artwork group item.
 * @name GroupItemJSDocType
 * @class
 */
class GroupItemJSDocType {
  /** @type {boolean} - Are the group elements clipped to the clipping path? */
  clipped;
  /** @readonly @type {CompoundPathItems} - The compound path artwork in this group. */
  compoundPathItems;
  /** @readonly @type {GraphItems} - The graph art items in this group. */
  graphItems;
  /** @readonly @type {GroupItems} - The group items in this group. */
  groupItems;
  /** @readonly @type {LegacyTextItems} - The text frame items in this story. */
  legacyTextItems;
  /** @readonly @type {MeshItems} - The mesh art items in this group. */
  meshItems;
  /** @readonly @type {NonNativeItems} - The non-native art items in this group. */
  nonNativeItems;
  /** @readonly @type {PageItems} - All the artwork in this group. */
  pageItems;
  /** @readonly @type {PathItems} - The path artwork in this group. */
  pathItems;
  /** @readonly @type {PlacedItems} - The placed art items in this group. */
  placedItems;
  /** @readonly @type {PluginItems} - The plugin art items in this group. */
  pluginItems;
  /** @readonly @type {RasterItems} - The raster art items in this group. */
  rasterItems;
  /** @readonly @type {SymbolItems} - The symbol items in this group. */
  symbolItems;
  /** @readonly @type {TextFrameItems} - The text frame items in this group. */
  textFrames;
}

/**
 * @typedef {PageItem & GroupItemJSDocType} GroupItem
*/

/**
 * An instance of a Symbol.
 * @name SymbolItemJSDocType
 * @class
 */
class SymbolItemJSDocType {
  /** @type {Symbol} - The symbol that was used to create this symbol item. */
  symbol;
  /**
   * Break link to the symbol.
   * @returns {void}
   */
  breakLink = function () {};
}

/**
 * @typedef {PageItem & SymbolItemJSDocType} SymbolItem
*/

/**
 * A text path item.
 * @name TextPath
 * @class
 */
class TextPath {
  /** @readonly @type {number} - The area of this path in square points. */
  area;
  /** @type {BlendModes} - The mode used when compositing an object. */
  blendingMode;
  /** @type {boolean} - Should this be used as a clipping path? */
  clipping;
  /** @type {boolean} - Is this path closed? */
  closed;
  /** @readonly @type {boolean} - Can the text path be modified. */
  editable;
  /** @type {boolean} - Should the even-odd rule be used to determine insideness? */
  evenodd;
  /** @type {Color} - Fill color. */
  fillColor;
  /** @type {boolean} - Will art beneath a filled object be overprinted? */
  fillOverprint;
  /** @type {boolean} - Should the path be filled? */
  filled;
  /** @type {boolean} - Is this path a guide object? */
  guides;
  /** @type {number} - The height of the text path. */
  height;
  /** @type {number} - The left position of the text path. */
  left;
  /** @type {string} - Note assigned to the path. */
  note;
  /** @type {number} - The object's opacity (between 0.0 and 100.0) */
  opacity;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {PathPoints} - */
  pathPoints;
  /** @type {PolarityValues} - The polarity the path. */
  polarity;
  /** @type {Point | [number, number]} - The position of the top left corner of the text path. */
  position;
  /** @type {number} - The resolution of the path. */
  resolution;
  /** @readonly @type {PathPoints} - All the selected points in the path. */
  selectedPathPoints;
  /** @type {StrokeCap} - Type of line capping. */
  strokeCap;
  /** @type {Color} - Stroke color. */
  strokeColor;
  /** @type {number} - The default distance into the dash pattern at which the pattern should be started. */
  strokeDashOffset;
  /** @type {number[]} - Dash lengths (set to {} for a solid line) */
  strokeDashes;
  /** @type {StrokeJoin} - Type of joints. */
  strokeJoin;
  /** @type {number} - Whether a join is mitered (pointed) or beveled (squared-off) */
  strokeMiterLimit;
  /** @type {boolean} - Will art beneath a stroked object be overprinted? */
  strokeOverprint;
  /** @type {number} - Width of stroke. */
  strokeWidth;
  /** @type {boolean} - Should the path be stroked? */
  stroked;
  /** @type {number} - The top position of the text path. */
  top;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @type {number} - The width of the text path. */
  width;
  /**
   * Set the path using the provided array of anchor points.
   * @param {any[]} pathPoints - Array of anchor values for the path points.
   * @returns {void}
   */
  setEntirePath = function (pathPoints) {};
}

/**
 * A contiguous block of text.
 * @name Story
 * @class
 */
class Story {
  /** @readonly @type {Characters} - All the characters in this text range. */
  characters;
  /** @readonly @type {InsertionPoints} - All the insertion points in this text range. */
  insertionPoints;
  /** @readonly @type {number} - The number of characters in the story. */
  length;
  /** @readonly @type {Lines} - All the lines in this text range. */
  lines;
  /** @readonly @type {Paragraphs} - All the paragraphs in this text range. */
  paragraphs;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {TextFrameItems} - The text frame items in this story. */
  textFrames;
  /** @readonly @type {TextRange} - The text range of the story. */
  textRange;
  /** @readonly @type {TextRanges} - All the text in this text range. */
  textRanges;
  /** @readonly @type {TextRange[]} - The selected text (ranges) in the story. */
  textSelection;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @readonly @type {Words} - All the words in this text range. */
  words;
}

/**
 * Text frame item.
 * @name TextFrameJSDocType
 * @class
 */
class TextFrameJSDocType {
  /** @type {Point | [number, number]} - The position of the anchor point (start of base line for point text) */
  anchor;
  /** @type {TextAntialias} - The type of a text anti-aliasing on text frame item. */
  antialias;
  /** @readonly @type {Characters} - All the characters in this text range. */
  characters;
  /** @type {number} - The column count in the text frame (area text only) */
  columnCount;
  /** @type {number} - The column gutter in the text frame (area text only) */
  columnGutter;
  /** @type {any} - The content variable bound to this text art item. */
  contentVariable;
  /** @type {string} - The text contents of this text frame. */
  contents;
  /** @type {number} - The end position of text along a path, as a value relative to the path's segments (path text only) */
  endTValue;
  /** @type {FirstBaselineType} - The first baseline offset type for text frame item (for Area Text only) */
  firstBaseline;
  /** @type {number} - The first baseline offset minimum value for text frame item (for Area Text only) */
  firstBaselineMin;
  /** @type {boolean} - Flow text between linked frame horizontally first. (area text only) */
  flowLinksHorizontally;
  /** @readonly @type {InsertionPoints} - All the insertion points in this text range. */
  insertionPoints;
  /** @readonly @type {TextType} - The type of a text frame item. */
  kind;
  /** @readonly @type {Lines} - All the lines in this text range. */
  lines;
  /** @readonly @type {Matrix} - The transformation matrix of the text frame object. */
  matrix;
  /** @type {TextFrame} - The linked text frame following this one. */
  nextFrame;
  /** @type {boolean} - Is the optical alignment active? */
  opticalAlignment;
  /** @type {TextOrientation} - The orientation of the text in the frame. */
  orientation;
  /** @readonly @type {Paragraphs} - All the paragraphs in this text range. */
  paragraphs;
  /** @type {TextFrame} - The linked text frame preceding this one. */
  previousFrame;
  /** @type {number} - The row count in the text frame (area text only) */
  rowCount;
  /** @type {number} - The row gutter in the text frame (area text only) */
  rowGutter;
  /** @type {number} - The amount of spacing (path text only) */
  spacing;
  /** @type {number} - The start position of text along a path, as a value relative to the path's segments (path text only) */
  startTValue;
  /** @readonly @type {Story} - The story of the text frame. */
  story;
  /** @readonly @type {TextPath} - The path for the text frame (area and path text) */
  textPath;
  /** @readonly @type {TextRange} - The text range of the text frame. */
  textRange;
  /** @readonly @type {TextRanges} - All the text in this text range. */
  textRanges;
  /** @readonly @type {TextRange[]} - The selected text (ranges) in the story. */
  textSelection;
  /** @readonly @type {Words} - All the words in this text range. */
  words;
  /**
   * Convert Area Type Text Object To Point Type Object.
   * @returns {TextFrame}
   */
  convertAreaObjectToPointObject = function () {};
  /**
   * Convert Point Type Text Object To Area Type Object.
   * @returns {TextFrame}
   */
  convertPointObjectToAreaObject = function () {};
  /**
   * Convert text item to path items.
   * @returns {GroupItem}
   */
  createOutline = function () {};
  /**
   * Generates the thumbnail with the properties of first character in the text frame.
   * @param {string} textString - The text string which is to be used in the thumbnail generation.
   * @param {number} fontSize - The size in points of the text string.
   * @param {Color} textColor - The color of the text string.
   * @param {File} destinationPath - The location at which the thumbnail is to be stored.
   * @returns {void}
   */
  generateThumbnailWithTextFrameProperties = function (textString, fontSize, textColor, destinationPath) {};
}

/**
 * @typedef {PageItem & TextFrameJSDocType} TextFrame
*/

/**
 * Unconverted legacy text items from documents in pre-version 11 formats.
 * @name LegacyTextItemJSDocType
 * @class
 */
class LegacyTextItemJSDocType {
  /** @readonly @type {boolean} - Has the legacy text item been updated to a native text frame item? */
  converted;
  /**
   * Create a native text frame from a legacy text item. The original legacy text item is deleted.
   * @returns {GroupItem}
   */
  convertToNative = function () {};
}

/**
 * @typedef {PageItem & LegacyTextItemJSDocType} LegacyTextItem
*/

/**
 * A range of characters from a text item.
 * @name TextRange
 * @class
 */
class TextRange {
  /** @readonly @type {CharacterAttributes} - The character properties for the text range. */
  characterAttributes;
  /** @type {number} - Offset of the first character of the range from the beginning of the story, in characters. */
  characterOffset;
  /** @readonly @type {CharacterStyles} - List of referenced character styles in the text range. */
  characterStyles;
  /** @readonly @type {Characters} - All the characters in this text range. */
  characters;
  /** @type {string} - The text string. */
  contents;
  /** @readonly @type {InsertionPoints} - All the insertion points in this text range. */
  insertionPoints;
  /** @type {number} - Controls the spacing between two characters (in milli-ems) */
  kerning;
  /** @type {number} - Length of text range. */
  length;
  /** @readonly @type {Lines} - All the lines in this text range. */
  lines;
  /** @readonly @type {ParagraphAttributes} - The paragraph properties for the text range. */
  paragraphAttributes;
  /** @readonly @type {ParagraphStyles} - List of referenced paragraph styles in the text range. */
  paragraphStyles;
  /** @readonly @type {Paragraphs} - All the paragraphs in this text range. */
  paragraphs;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {Story} - The story of the text range. */
  story;
  /** @readonly @type {TextRanges} - All the text in this text range. */
  textRanges;
  /** @readonly @type {TextRange[]} - The selected text (ranges) in the text range. */
  textSelection;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @readonly @type {Words} - All the words in this text range. */
  words;
  /**
   * Change the capitalization of text.
   * @param {CaseChangeType} type - The type of case.
   * @returns {void}
   */
  changeCaseTo = function (type) {};
  /**
   * Deselect the text range.
   * @returns {void}
   */
  deSelect = function () {};
  /**
   * Duplicate this object.
   * @param relativeObject
   * @param insertionLocation
   * @returns {TextRange}
   */
  duplicate = function (relativeObject, insertionLocation) {};
  /**
   * Move the object.
   * @param relativeObject
   * @param insertionLocation
   * @returns {TextRange}
   */
  move = function (relativeObject, insertionLocation) {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
  /**
   * Select the text range.
   * @param {boolean} [addToDocument] - Whether to add the text range to the document text selection.
   * @returns {void}
   */
  select = function (addToDocument) {};
}

/**
 * A location between characters, used to insert new text objects.
 * @name InsertionPoint
 * @class
 */
class InsertionPoint {
  /** @readonly @type {Characters} - All the characters in this text range. */
  characters;
  /** @readonly @type {Lines} - All the lines in this text range. */
  lines;
  /** @readonly @type {Paragraphs} - All the paragraphs in this text range. */
  paragraphs;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {Story} - The story of the text range. */
  story;
  /** @readonly @type {TextRanges} - All the text in this text range. */
  textRanges;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @readonly @type {Words} - All the words in this text range. */
  words;
}

/**
 * A named style that remembers character attributes.
 * @name CharacterStyle
 * @class
 */
class CharacterStyle {
  /** @readonly @type {CharacterAttributes} - The character properties for the text range. */
  characterAttributes;
  /** @type {string} - The character style's name. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Adds an element.
   * @returns {CharacterStyle}
   */
  add = function () {};
  /**
   * Apply the character style to text object(s)
   * @param {any} textItem - The text object(s) to apply the style to.
   * @param {boolean} [clearingOverrides] - Whether to clear any text attributes before apply the style.
   * @returns {void}
   */
  applyTo = function (textItem, clearingOverrides) {};
  /**
   * Remove all the attributes from this character style.
   * @returns {void}
   */
  clear = function () {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * A named style that remembers paragraph attributes.
 * @name ParagraphStyle
 * @class
 */
class ParagraphStyle {
  /** @readonly @type {CharacterAttributes} - The character properties for the text range. */
  characterAttributes;
  /** @type {string} - The paragraph style's name. */
  name;
  /** @readonly @type {ParagraphAttributes} - The paragraph properties for the text range. */
  paragraphAttributes;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Adds an element.
   * @returns {ParagraphStyle}
   */
  add = function () {};
  /**
   * Apply the paragraph style to text object(s)
   * @param {any} textItem - The text object(s) to apply the style to.
   * @param {boolean} [clearingOverrides] - Whether to clear any text attributes before apply the style.
   * @returns {void}
   */
  applyTo = function (textItem, clearingOverrides) {};
  /**
   * Remove all the attributes from this paragraph style.
   * @returns {void}
   */
  clear = function () {};
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * Properties of a character.
 * @name CharacterAttributes
 * @class
 */
class CharacterAttributes {
  /** @type {number} - The percentage of space reduction around a Japanese character (100 = 100%) */
  Tsume;
  /** @type {number} - The em amount of left aki. */
  akiLeft;
  /** @type {number} - The em amount of right aki amount. */
  akiRight;
  /** @type {StyleRunAlignmentType} - The character alignment type. */
  alignment;
  /** @type {AlternateGlyphsForm} - The alternate glyphs form. */
  alternateGlyphs;
  /** @type {boolean} - Whether to use automatic leading. */
  autoLeading;
  /** @type {BaselineDirectionType} - The Japanese text baseline direction. */
  baselineDirection;
  /** @type {FontBaselineOption} - The baseline position of text. */
  baselinePosition;
  /** @type {number} - The amount of shift (in points) of the text baseline. */
  baselineShift;
  /** @type {FontCapsOption} - The case of text. */
  capitalization;
  /** @type {boolean} - Whether the OpenType connection forms should be used. */
  connectionForms;
  /** @type {boolean} - Whether the contextual ligature should be used. */
  contextualLigature;
  /** @type {boolean} - Whether the discretionary ligature should be used. */
  discretionaryLigature;
  /** @type {FigureStyleType} - Which figure style to use in OpenType font. */
  figureStyle;
  /** @type {Color} - The color of the text fill. */
  fillColor;
  /** @type {boolean} - Whether the OpenType fractions should be used. */
  fractions;
  /** @type {number} - Character horizontal scaling factor expressed as a percentage (100 = 100%) */
  horizontalScale;
  /** @type {boolean} - Does the Japanese OpenType support italics? */
  italics;
  /** @type {AutoKernType} - The automatic kerning method to use. */
  kerningMethod;
  /** @type {LanguageType} - The language of text. */
  language;
  /** @type {number} - The amount of space between two lines of text (in points) */
  leading;
  /** @type {boolean} - Whether the ligature should be used. */
  ligature;
  /** @type {boolean} - Whether line breaks are allowed. */
  noBreak;
  /** @type {FontOpenTypePositionOption} - The OpenType baseline position. */
  openTypePosition;
  /** @type {boolean} - Whether the OpenType ordinals should be used. */
  ordinals;
  /** @type {boolean} - Whether the OpenType ornaments should be used. */
  ornaments;
  /** @type {boolean} - Whether to overprint the fill of the text. */
  overprintFill;
  /** @type {boolean} - Whether to overprint the stroke of the text. */
  overprintStroke;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {boolean} - Does the Japanese OpenType support proportional font? */
  proportionalMetrics;
  /** @type {number} - The character rotation angle (in degrees) */
  rotation;
  /** @type {number} - Font size in points. */
  size;
  /** @type {boolean} - Whether to draw a strike through line over the text. */
  strikeThrough;
  /** @type {Color} - The color of the text stroke. */
  strokeColor;
  /** @type {number} - Line width of stroke. */
  strokeWeight;
  /** @type {boolean} - Whether the OpenType stylistic alternates should be used. */
  stylisticAlternates;
  /** @type {boolean} - Whether the OpenType swash should be used. */
  swash;
  /** @type {number} - The Tate-Chu-Yoko horizontal adjustment in points. */
  tateChuYokoHorizontal;
  /** @type {number} - The Tate-Chu-Yoko vertical adjustment in points. */
  tateChuYokoVertical;
  /** @type {TextFont} - The text font. */
  textFont;
  /** @type {boolean} - Whether the OpenType titling alternates should be used. */
  titling;
  /** @type {number} - The tracking or range kerning amount in thousands of an em. */
  tracking;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @type {boolean} - Whether to underline the text. */
  underline;
  /** @type {number} - Character vertical scaling factor expressed as a percentage (100 = 100%) */
  verticalScale;
  /** @type {number} - */
  wariChuCharactersAfterBreak;
  /** @type {number} - */
  wariChuCharactersBeforeBreak;
  /** @type {boolean} - Whether WariChu is enabled. */
  wariChuEnabled;
  /** @type {WariChuJustificationType} - */
  wariChuJustification;
  /** @type {number} - The Wari-Chu line gap. */
  wariChuLineGap;
  /** @type {number} - The number of Wari-Chu (multiple text lines fit into a space meant for one) lines. */
  wariChuLines;
  /** @type {number} - The Wari-Chu scale. */
  wariChuScale;
}

/**
 * Properties of a paragraph.
 * @name ParagraphAttributes
 * @class
 */
class ParagraphAttributes {
  /** @type {number} - Auto leading amount (in percentage) */
  autoLeadingAmount;
  /** @type {boolean} - Is BunriKinshi enabled? */
  bunriKinshi;
  /** @type {BurasagariTypeEnum} - The Burasagari type. */
  burasagariType;
  /** @type {number} - Desired glyph scaling expressed as a percentage. */
  desiredGlyphScaling;
  /** @type {number} - Desired letter spacing expressed as a percentage. */
  desiredLetterSpacing;
  /** @type {number} - Desired word spacing expressed as a percentage. */
  desiredWordSpacing;
  /** @type {boolean} - Whether to enable every line composer (as opposed to single line composer)? */
  everyLineComposer;
  /** @type {number} - First line left indent expressed in points. */
  firstLineIndent;
  /** @type {boolean} - Is hyphenation enabled for the capitalized words? */
  hyphenateCapitalizedWords;
  /** @type {boolean} - Is hyphenation enabled for the paragraph? */
  hyphenation;
  /** @type {number} - Hyphenation preference scale for better spacing (0) or fewer hyphens (1) */
  hyphenationPreference;
  /** @type {number} - Size of the hyphenation zone. */
  hyphenationZone;
  /** @type {Justification} - Paragraph justification. */
  justification;
  /** @type {string} - The Kinsoku Shori name. */
  kinsoku;
  /** @type {KinsokuOrderEnum} - The preferred Kinsoku order. */
  kinsokuOrder;
  /** @type {boolean} - Is KurikaeshiMojiShori enabled? */
  kurikaeshiMojiShori;
  /** @type {AutoLeadingType} - Auto leading type. */
  leadingType;
  /** @type {number} - Left indent of margin expressed in points. */
  leftIndent;
  /** @type {number} - Maximum number of consecutive hypenated lines. */
  maximumConsecutiveHyphens;
  /** @type {number} - Maximum glyph scaling expressed as a percentage. */
  maximumGlyphScaling;
  /** @type {number} - Maximum letter spacing expressed as a percentage. */
  maximumLetterSpacing;
  /** @type {number} - Maximum word spacing expressed as a percentage. */
  maximumWordSpacing;
  /** @type {number} - Minimum number of characters after a hyphen. */
  minimumAfterHyphen;
  /** @type {number} - Minimum number of characters before a hyphen. */
  minimumBeforeHyphen;
  /** @type {number} - Minimum glyph scaling expressed as a percentage. */
  minimumGlyphScaling;
  /** @type {number} - Minimum hyphenated word size. */
  minimumHyphenatedWordSize;
  /** @type {number} - Minimum letter spacing expressed as a percentage. */
  minimumLetterSpacing;
  /** @type {number} - Minimum word spacing expressed as a percentage. */
  minimumWordSpacing;
  /** @type {string} - The Mojikumi name. */
  mojikumi;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {number} - Right indent of margin expressed in points. */
  rightIndent;
  /** @type {boolean} - Is Roman hanging punctuation enabled? */
  romanHanging;
  /** @type {Justification} - Single word justification. */
  singleWordJustification;
  /** @type {number} - Spacing after paragraph in points. */
  spaceAfter;
  /** @type {number} - Spacing before paragraph in points. */
  spaceBefore;
  /** @type {TabStopInfo[]} - Tab stop settings. */
  tabStops;
  /** @readonly @type {string} - The class name of the object. */
  typename;
}

/**
 * Options which are applied when opening or placing a Photoshop file.
 * @name OpenOptionsPhotoshop
 * @class
 */
class OpenOptionsPhotoshop {
  /** @type {string} - Should use the specified LayerComp. */
  layerComp;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {boolean} - Should hidden layers be preserved when the document is converted (default: false) */
  preserveHiddenLayers;
  /** @type {boolean} - Should image maps be preserved when the document is converted (default: true) */
  preserveImageMaps;
  /** @type {boolean} - Should layers be Preserve when the document is converted (default: true) */
  preserveLayers;
  /** @type {boolean} - Should slices be preserved when the document is converted (default: true) */
  preserveSlices;
  /** @readonly @type {string} - The class name of the object. */
  typename;
}

/**
 * Options which may be supplied when opening a PDF file.
 * @name OpenOptionsPDF
 * @class
 */
class OpenOptionsPDF {
  /** @type {PDFBoxType} - What box should be used when placing a multipage document (default: PDF media box) */
  pDFCropToBox;
  /** @type {number} - What page should be used when opening a multipage document (default: 1) */
  pageToOpen;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {string} - The class name of the object. */
  typename;
}

/**
 * Options which may be supplied when opening a AutoCAD file.
 * @name OpenOptionsAutoCAD
 * @class
 */
class OpenOptionsAutoCAD {
  /** @type {boolean} - To center the created artwork on the artboard (default: true) */
  centerArtwork;
  /** @type {AutoCADGlobalScaleOption} - How to scale the AutoCAD drawing on import (default: Fit Artboard) */
  globalScaleOption;
  /** @type {number} - Percentage scaling to apply globally on the AutoCAD drawing (default: 1.0) */
  globalScalePercent;
  /** @type {boolean} - To merge the layers of the artwork (default: false) */
  mergeLayers;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {boolean} - To scale lineweights by the same amount as rest of the drawing (default: false) */
  scaleLineweights;
  /** @type {string} - Name of layout in the AutoCAD drawing to import. */
  selectedLayoutName;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @type {AutoCADUnit} - Units to which to map (default: Millimeters) */
  unit;
  /** @type {number} - Ratio by which to scale while mapping the units (default: 1.0) */
  unitScaleRatio;
}

/**
 * Tracing options that guide the tracing process.
 * @name TracingOptions
 * @class
 */
class TracingOptions {
  /** @type {number} - ColorFidelity when TracingColorTypeValue is TracingFullColor. */
  colorFidelity;
  /** @type {string} - The color group name used for tracing. Use 'All' or any color group name available in color Palette (library). */
  colorGroup;
  /** @type {number} - Corner fidelity for tracing. */
  cornerFidelity;
  /** @type {boolean} - Tracing with fills. Fills, Strokes or both must be on. */
  fills;
  /** @type {number} - The gray levels for a grayscale mode tracing.. */
  grayLevels;
  /** @type {boolean} - Controls whether to ignore white fill color. Works only if TracingMethod is TracingMethodAbutting and mode is Black and white. */
  ignoreWhite;
  /** @type {number} - Maximum stroke weight (stroke only). */
  maxStrokeWeight;
  /** @type {number} - Specifies minimum area of pixels to be vectorized. */
  noiseFidelity;
  /** @type {string} - The color palette (Library) name used for tracing. Use 'Document Library' or any other imported library name. */
  palette;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {number} - Path fidelity for tracing. */
  pathFidelity;
  /** @readonly @type {string} - The name of the preset in use. Read-only. */
  preset;
  /** @type {boolean} - Controls whether to snap curve to lines. */
  snapCurveToLines;
  /** @type {boolean} - Tracing with strokes. Fills, Strokes or both must be on. */
  strokes;
  /** @type {number} - The threshold value for a black and white mode tracing. */
  threshold;
  /** @type {TracingColorType} - Color Type used for tracing, TracingLimitedColor or TracingFullColor . */
  tracingColorTypeValue;
  /** @type {number} - Maximum number of colors allowed for tracing when TracingColorTypeValue is TracingLimitedColor. */
  tracingColors;
  /** @type {TracingMethodType} - Method for tracing, either abutting or adjoining paths. */
  tracingMethod;
  /** @type {TracingModeType} - The tracing mode: color, gray, black and white. */
  tracingMode;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @type {ViewType} - The visualization mode. */
  viewMode;
  /**
   * Load options from preset.
   * @param {string} presetName - The name of the preset.
   * @returns {boolean}
   */
  loadFromPreset = function (presetName) {};
  /**
   * Store options to a preset kAiVectorizeSuite. Will overwrite an existing (unlocked) preset if names match.
   * @param {string} presetName - The name of the preset.
   * @returns {boolean}
   */
  storeToPreset = function (presetName) {};
}

/**
 * A tracing object.
 * @name TracingObject
 * @class
 */
class TracingObject {
  /** @readonly @type {number} - The number of anchors in the tracing result. */
  anchorCount;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @readonly @type {number} - The number of paths in the tracing result. */
  pathCount;
  /** @readonly @type {PageItem} - The source art used when creating a new tracing object. */
  sourceArt;
  /** @readonly @type {TracingOptions} - The options used when tracing the artwork. */
  tracingOptions;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /** @readonly @type {number} - The number of colors used in the tracing result. */
  usedColorCount;
  /**
   * Expand the tracing to paths. Deletes this tracing object.
   * @param {boolean} [viewed] - Expand as viewed with the raster and vector view modes.
   * @returns {GroupItem}
   */
  expandTracing = function (viewed) {};
  /**
   * Release the source artwork for the tracing object. Deletes this tracing object.
   * @returns {PageItem}
   */
  releaseTracing = function () {};
}

/**
 * An artboard object.
 * @name Artboard
 * @class
 */
class Artboard {
  /** @type {Rect} - Size and position of artboard. */
  artboardRect;
  /** @type {string} - The name of the artboard. */
  name;
  /** @readonly @type {object} - The object's container. */
  parent;
  /** @type {Point | [number, number]} - Ruler origin of artboard.It is relative to left-bottom corner of the Artboard. */
  rulerOrigin;
  /** @type {number} - Pixel aspect ratio, used in ruler visualization if the units are pixels. */
  rulerPAR;
  /** @type {boolean} - Show center mark. */
  showCenter;
  /** @type {boolean} - Show cross hairs. */
  showCrossHairs;
  /** @type {boolean} - Show title and action safe areas (for video) */
  showSafeAreas;
  /** @readonly @type {string} - The class name of the object. */
  typename;
  /**
   * Deletes this object.
   * @returns {void}
   */
  remove = function () {};
  /**
   * Deletes all elements.
   * @returns {void}
   */
  removeAll = function () {};
}

/**
 * Describes a rectangle. This class is also a four-element collection.
 *
 * Format: left, top, right, bottom.
 * Width and height can be computed using `[r[2] - r[0], r[1] - r[3]]`.
 *
 * **Note:** y axis is flipped. Upper means negative number, lower means positive.
 * @typedef {[number, number, number, number]} Rect
 *
 */