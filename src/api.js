export function fetchAbout() {
  return fetch('http://localhost:4000/about').then(resp => resp.json());
}

export function fetchJobs() {
  return fetch('http://localhost:4000/jobs').then(resp => resp.json());
}
