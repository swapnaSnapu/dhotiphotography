'use client';

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from './Firebase/config';
import CheckAuth from './Firebase/CheckAuth';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/admin/Login');
  };

  return (
    <CheckAuth>
      <main className="p-6 min-h-screen bg-gray-100 text-gray-900">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700">📸 Snapu Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="admin/reviewCards">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">📷 Review Cards</h2>
            <p className="text-gray-600">Manage client reviews here.</p>
          </section>
          </Link>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">🎁 Packages</h2>
            <p className="text-gray-600">Create and edit photography packages.</p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">💬 Why Choose Us</h2>
            <p className="text-gray-600">Update your business highlights here.</p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">🖼️ Gallery</h2>
            <p className="text-gray-600">Upload and manage gallery images.</p>
          </section>
        </div>
      </main>
    </CheckAuth>
  );
}
