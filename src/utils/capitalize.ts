export function capitalize(sentence: string) {
  const words = sentence.split(" ");

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  const sentenceFormated = words.join(" ");

  return sentenceFormated;
}
