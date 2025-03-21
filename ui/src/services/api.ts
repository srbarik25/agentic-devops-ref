// API configuration and base methods
export const API_BASE_URL = '/api';

export async function fetchWithAuth<T>(endpoint: string, options = {}): Promise<T> {
  // For demo/mock implementation, returns dummy data
  const mockResponses: Record<string, unknown> = {
    '/ec2/list': { instances: [{ id: 'i-1234', state: 'running' }] },
    '/ec2/i-1234': { instance: { id: 'i-1234', state: 'running', type: 't2.micro', zone: 'us-east-1a' } },
    '/ec2/create': { instance: { id: 'i-5678', state: 'pending', type: 't2.micro', zone: 'us-east-1a' } },
    '/ec2/i-1234/start': { success: true },
    '/ec2/i-1234/stop': { success: true },
    '/github/repos': { repos: [{ name: 'agentic-devops', owner: 'username' }] },
    '/github/repos/username/agentic-devops': { repo: { name: 'agentic-devops', owner: 'username', description: 'DevOps automation with AI' } }
  };
  
  if (endpoint in mockResponses) {
    return mockResponses[endpoint] as T;
  }
  
  // In real implementation, this would make actual API calls
  // return fetch(`${API_BASE_URL}${endpoint}`, {
  //   ...options,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     ...options.headers
  //   }
  // }).then(res => res.json());
  
  // For now, return a mock empty response
  return {} as T;
}