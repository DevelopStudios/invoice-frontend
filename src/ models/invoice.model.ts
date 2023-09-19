export interface Invoice {
        id: number,
        client_name: string,
        client_email: string,
        to_city: string,
        to_post_code: string,
        to_country: string,
        invoice_date: string,
        project_description: string,
        from_street_address: string,
        from_city: string,
        from_post_code: string,
        from_country: string,
        payment_term: number,
        status: number,
        invoice_items: []
}