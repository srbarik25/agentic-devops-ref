import { fetchWithAuth } from './api';

export interface Instance {
  id: string;
  state: string;
  type?: string;
  zone?: string;
}

export async function listInstances(): Promise<{ instances: Instance[] }> {
  return fetchWithAuth('/ec2/list');
}

export async function getInstance(id: string): Promise<{ instance: Instance }> {
  return fetchWithAuth(`/ec2/${id}`);
}

// Additional EC2 functions would be implemented here
export async function createInstance(type: string, zone: string): Promise<{ instance: Instance }> {
  return fetchWithAuth('/ec2/create', {
    method: 'POST',
    body: JSON.stringify({ type, zone })
  });
}

export async function startInstance(id: string): Promise<{ success: boolean }> {
  return fetchWithAuth(`/ec2/${id}/start`, {
    method: 'POST'
  });
}

export async function stopInstance(id: string): Promise<{ success: boolean }> {
  return fetchWithAuth(`/ec2/${id}/stop`, {
    method: 'POST'
  });
}