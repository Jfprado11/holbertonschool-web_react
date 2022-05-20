interface MajorCredits {
  credits: number;
  major: string;
}

interface MinorCredits {
  credits: number;
  minor: string;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  const sum = subject1 + subject2;
  return { credits: sum, major: 'Major' };
}
function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  const sum = subject1 + subject2;
  return { credits: sum, minor: 'Minor' };
}
