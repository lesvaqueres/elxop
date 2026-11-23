// Convert a photo (HEIC/JPEG) to JPEG with its rotation baked in. Build: swiftc -O scripts/heic-to-jpg.swift -o heic-to-jpg
// usage: ./heic-to-jpg in.HEIC out.jpg [max-size-px]
// Convert an image to JPEG with the EXIF/HEIF rotation baked in.
import Foundation
import ImageIO
import UniformTypeIdentifiers
let a = CommandLine.arguments
let src = CGImageSourceCreateWithURL(URL(fileURLWithPath: a[1]) as CFURL, nil)!
let opts: [CFString: Any] = [kCGImageSourceCreateThumbnailFromImageAlways: true, kCGImageSourceCreateThumbnailWithTransform: true, kCGImageSourceThumbnailMaxPixelSize: Int(a[3]) ?? 5000]
let img = CGImageSourceCreateThumbnailAtIndex(src, 0, opts as CFDictionary)!
let dst = CGImageDestinationCreateWithURL(URL(fileURLWithPath: a[2]) as CFURL, UTType.jpeg.identifier as CFString, 1, nil)!
CGImageDestinationAddImage(dst, img, [kCGImageDestinationLossyCompressionQuality: 0.95] as CFDictionary)
CGImageDestinationFinalize(dst)
