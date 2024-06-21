'use client';

import React from 'react';
import { toast } from 'react-toastify';

import Input from '@/components/input';
import { Recaptcha } from '@/components/recaptcha';

export function Contact() {
  const [email, setEmail] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [showRecaptcha, setShowRecaptcha] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const sendData = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://admin.harvely.com/api/message-dug-assistants',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 5d5a8ca3f0f2bc86426ab60cac04771576338d956b828a394033b6858839b6ddc9ff66505bb2749c479dab84a05a150713fe3e5755221b94808d249d00bbae832dbe8da37a9dd2c6f5bf580c3dc6bbde2b69c438d26f4edbefa42229b2f9e53353bc48870d62695e4b74d83ea5f1c103361422a323b189b1fb75830f9c31fb0e`,
        },
        body: JSON.stringify({ data: { fullname, email, message } }),
      },
    );
    setIsLoading(false);
    if (response.ok) {
      setEmail('');
      setFullname('');
      setMessage('');
      setShowRecaptcha(false);
      toast.success(
        'Merci de votre message, un membre de notre équipe va bientot vous contacter.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    }
  };
  return (
    <div
      id="contact"
      className="flex h-screen w-full flex-col bg-primary-100 px-4  py-8 md:items-center md:justify-center md:p-16"
    >
      <h1 className="mb-8 text-[24px] font-semibold text-primary-400 md:text-[32px]">
        Contact
      </h1>
      {showRecaptcha && (
        <Recaptcha
          onChange={(value: any) => {
            setShowRecaptcha(false);
            if (value) sendData();
          }}
        />
      )}
      <div className="w-full rounded-lg bg-primary-300/20 p-8 shadow-sm shadow-black/20 md:w-[60%]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <Input
            name=""
            label="Full name"
            placeholder=""
            bgColor="mb-4 h-[40px] w-full rounded-md border border-primary-300/20 bg-primary-300/20"
            onChange={(e: any) => setFullname(e)}
            defaultValue={fullname}
          />
          <Input
            name=""
            label="Email"
            placeholder=""
            bgColor="mb-4 h-[40px] w-full rounded-md border border-primary-300/20 bg-primary-300/20"
            onChange={(e: any) => setEmail(e)}
            defaultValue={email}
          />
        </div>
        <textarea
          placeholder="Message"
          className="mb-4 h-[150px] w-full rounded-md border border-primary-300/20 bg-primary-300/20"
          onChange={(e: any) => setMessage(e.target.value)}
          value={message}
        />
        <button
          className="w-full rounded-md bg-primary-300 px-4 py-2 font-semibold text-primary-400"
          onClick={() => {
            if (isLoading) return;
            setShowRecaptcha(true);
          }}
        >
          {isLoading ? 'Envoi ...' : 'Nous contacter'}
        </button>
      </div>
    </div>
  );
}
