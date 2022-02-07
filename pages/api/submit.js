
const submit = async (req, res) => {
    // if(req.method === 'POST' ) {
    //     const graphql = JSON.stringify({
    //         query: `mutation {\r\n  create_item(item_name: \"${req.body}\", board_id:2049746906, column_values: \"{\\\"status\\\": {\\\"index\\\": 0},\\\"text32\\\": \\\"test@gmail.com\\\", \\\"date4\\\": {\\\"date\\\":\\\"1999-12-31\\\"},\\\"text6\\\": \\\"test\\\",\\\"text\\\": \\\"test\\\",\\\"text_1\\\": \\\"6032750163\\\",\\\"text9\\\": \\\"test\\\",\\\"text8\\\": \\\"300000\\\",\\\"text3\\\": \\\"test\\\",\\\"text85\\\": \\\"eh\\\",\\\"text1\\\": \\\"test\\\"}\") {\r\n    id\r\n  }\r\n}`,
    //         variables: {},
    //       });
        
    //       const resm = await fetch(`https://api.monday.com/v2`, {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //             Authorization: process.env.API_KEY,
    //           },
    //           body: graphql,
    //         })
    //         const data = await resm.json();
        
    //     res.status(200).json('success')
    //     console.log(data)
    // }
}

export default submit;