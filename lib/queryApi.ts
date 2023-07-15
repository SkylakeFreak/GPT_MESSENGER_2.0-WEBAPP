import openai from "./chatgpt";

const textquery = async (prompt: string, model: string) => {
    console.log(prompt);

    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 4000,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then((res) => res.data.choices[0].text)
        .catch(
            (err: { message: any; }) =>
                `ChatGPT was unable to find an answer for that! Or Developer has Disabled API due Transaction Limit! Please MAIL to utkarshbarde2@gmail.com for request to Access.. (Error: ${err.message})`
        );

    return res;
};

export default textquery;