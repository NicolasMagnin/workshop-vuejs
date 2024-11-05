app.component('product-details', {
    props: {
        packs: {
            type: Array,
            required: true,
        },
    },
    template:
    /*html*/
    `
    <table>
        <thead>
            <tr>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pack in packs" :key="pack.id">
                <td>{{ pack.quantity }}</td>
                <td>{{ pack.price }}</td>
            </tr>
        </tbody>
    </table >
    `
});