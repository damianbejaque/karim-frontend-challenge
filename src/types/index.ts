export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export interface Payment {
  id: string;
  receiverKey: string;
  amount: string;
  createdDate: string;
  completedDate: string;
  status: 'pending' | 'completed' | 'rejected';
}
