module.exports = {
    generatePossibilitiesBetween,
    generatePossibilitiesForK
}

function generatePossibilitiesBetween(charSet, min, max) {
  const res = [];
  for (let i = min - 1; i < max; i++) {
    res.push(...goDeeper(charSet, i));
  }
  return res
}

function generatePossibilitiesForK(charSet, k) {
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(...goDeeper(charSet, i));
  }
  return res
}

function goDeeper(charSet, k, current) {
    const res = [];
    if(!current) {
        current = ''
    }
    for(let j = 0; j < charSet.length; j++) {
        if(k === 0) {
            res.push(current + charSet[j])
        } else {
            res.push(...goDeeper(charSet, k - 1, current + charSet[j]))
        }
    }
    return res
}

