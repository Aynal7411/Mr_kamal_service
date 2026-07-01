import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import api from '../../services/api';

function MessagesManager() {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const res = await api.get('/messages');
    setMessages(res.data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const removeMessage = async (id) => {
    const result = await Swal.fire({ title: 'Delete message?', icon: 'warning', showCancelButton: true });
    if (!result.isConfirmed) return;
    await api.delete(`/messages/${id}`);
    Swal.fire('Deleted', 'Message removed', 'success');
    loadMessages();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Dashboard</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Manage Messages</h1>
      </div>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message._id} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{message.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{message.email}</p>
                <p className="mt-3 text-slate-700">{message.message}</p>
              </div>
              <button onClick={() => removeMessage(message._id)} className="rounded-full bg-red-100 px-3 py-2 text-sm text-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessagesManager;
