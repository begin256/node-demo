const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('utf-8'));

// 输出 cnVub29i
console.log(buf.toString('base64'));