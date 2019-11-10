const inputs = [
    { out: '200ms', delay: 100 },
    { out: '400ms', delay: 400 },
    { out: '50ms', delay: 50 },
]

getOutputs(inputs).then(outputs => {
    console.log(JSON.stringify(outputs, null, 2));
});

async function getOutputs(arr: Array<{ out: string, delay: number }>) {
    const outputs = await Promise.all(arr.map(async (input, i) => {
        console.log(JSON.stringify(input, null, 2));
        await sleep(input.delay);
        const output = `${i + 1} ${input.out}`;
        return output;
    }));
    return outputs;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
