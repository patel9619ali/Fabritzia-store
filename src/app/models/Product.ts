export type ProductData = {
    id: number;
    title: string;
    body_html: string;
    handle: string;
    tags: string;
    product_type: string;
    variants: [Variant];
    images: [{
        src: string;
    }];
    options: Option[]
}

export type Variant = {
    title: string;
    price: string;
    compare_at_price: string;
    option1: string;
    barcode: string;
}

export type Option ={
    product_id: string;
    name: string;
    values: string[];
}