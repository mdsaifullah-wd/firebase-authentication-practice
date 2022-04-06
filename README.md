# Simple Firebase Authentication Practice

#### Authentication: কাউকে কোনো কিছু, কারো কোনো Act (যা সঠিক বলে দাবী করা হচ্ছে) প্রকৃতপক্ষে তা সত্য কিনা নির্ণয় করার প্রক্রিয়া (Giving Assurance)

#### Authorization: কাউকে কোনো কাজ করার জন্য বা কোনো resource ব্যবহার করতে পারার permision দেওয়ার প্রক্রিয়া।

#### Encryption: কোনো তথ্যকে (text, image, file, credentials etc) অনেক সুরক্ষিত করার জন্য (saving from hackers) সেই তথ্যের Original Representation কে different representation এর মাধ্যমে প্রকাশ করা।

#### Okta, Firebase ব্যবহার করে ইউজার অথেন্টিকেশন করা যায়।

#### Firebase Authentication সার্ভিস ইউজ করার নিয়ম

- console.firebase.google.com এ গিয়ে প্রজেক্ট ক্রিয়েট করতে হবে
- Web এর জন্য Register App এ গিয়ে রেজিস্টার করতে হবে
- npm install firebase কমান্ড দিয়ে এক্সিস্টিং রিয়েক্ট প্রজেক্টে firebase SDK install করতে হবে।
- Firebase App Initialize করার জন্য Firebase Config কোড কপি করে একটা কনফিগ ফাইল ক্রিয়েট করতে হবে (firebase.init.js অথবা অন্য নামে) । export default app; দিয়ে app কে এক্সপোর্ট করতে হবে। পরে তা ব্যবহারের জন্য অন্য কম্পোনেন্টে ইম্পোর্ট করতে হবে।
- App.js কমপোনেন্টে ইউজ করার জন্য app ইম্পোর্ট করে getAuth(app) কল করে auth সেট করতে হবে।
- Firebase > Build > Authentication > Sign-in-Method থেকে যে প্রোভাইডারের Authentication সার্ভিস নিতে চাই সেটা Enable করতে হবে।
- Enable করা প্রোভাইডারকে প্রজেক্টে আমাদের পোভাইডার হিসেবে সেট করার জন্য App.js এ প্রোভাইডার সেট করার ফাংশন কল দিতে হবে । যেমনঃ const providerr = new GoogleAuthProvider();
- তারপর ওয়েবসাইটে কোনো বাটন ক্লিকে পপ আপ ওপেন করে সাইন ইন করানোর জন্য অই বাটনে একটা Event Handler এড করে Event Handler এর ভিতর signInWithPopup(auth, provider) কল করে .then(res => {}) দিয়ে ইউজার এর ইনফরমেশন পাওয়া যাবে এবং তা প্রয়োজন মতো UI তে দেখিয়ে Authentication কমপ্লিট করা যাবে। ইউজার Authentication করতে সক্ষম না হলে বা কোনো এরর হলে সেটাকে .catch(err => {}) দিয়ে Handle করতে হবে।
- Sign Out করার জন্য signOut(auth) কল করতে হবে।

#### SDK - Software Development Kit

- একটা package এর মধ্যে একসাথে কতগুলো software development tools এর collection যা নির্দিষ্ট application তৈরীর কাজকে সহজ করে দেয়।

- Firebase SDK- এক বা একের অধিক sign-in methods এর সমন্বয় ঘটিয়ে Authentication System কে handle করার কাজ সহজ করে দেয়।
