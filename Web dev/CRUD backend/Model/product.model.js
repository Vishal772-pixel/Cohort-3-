
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    default: 10
  },
  quantity: {
    type: Number,
    default: 1
  },
  // Fields from the sample data
  fornitore: {
    type: String, // Supplier name
    required: false
  },
  articolo: {
    type: String, // Article code
    required: false
  },
  primao: {
    type: String, // First part of Italian description
    required: false
  },
  secondao: {
    type: String, // Second part of Italian description
    required: false
  },
  prima: {
    type: String, // First part of English description
    required: false
  },
  seconda: {
    type: String, // Second part of English description
    required: false
  },
  EAN: {
    type: String, // European Article Number
    required: false
  },
  imballo: {
    type: String, // Packaging type
    required: false
  },
  pezziPerCollo: {
    type: Number, // Pieces per package
    required: false
  },
  umDim: {
    type: String, // Unit of measurement for dimensions
    required: false
  },
  dimensions: {
    base: {
      type: String, // Base dimension
      required: false
    },
    largezza: {
      type: String, // Width
      required: false
    },
    altezza: {
      type: String, // Height
      required: false
    }
  },
  umPesi: {
    type: String, // Unit of measurement for weights
    required: false
  },
  weight: {
    lordo: {
      type: String, // Gross weight
      required: false
    },
    netto: {
      type: String, // Net weight
      required: false
    }
  },
  volume: {
    type: Number, // Volume
    required: false
  },
  codiceDoganale: {
    type: String, // Customs code
    required: false
  },
  garanzia: {
    type: String, // Warranty
    required: false
  },
  images: [{
    type: String // Array of image URLs
  }],
  imageLink: {
    type: String, // Main image URL
    required: false
  }
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);