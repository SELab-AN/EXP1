# Student Task Planner

## گزارش آزمایش مهندسی نرم‌افزار

این پروژه برای آزمایش درس مهندسی نرم‌افزار پیاده‌سازی شده است. هدف اصلی این آزمایش، آشنایی عملی با فرآیند توسعه یک نرم‌افزار frontend ایستا با استفاده از Git، GitHub، شاخه‌بندی، Pull Request، حل conflict، محافظت از شاخه اصلی و استقرار خودکار پروژه روی GitHub Pages است.

---

## اعضای تیم

| نام و نام خانوادگی | شماره دانشجویی |
|---|---|
| ابوالفضل شیخها | ۴۰۱۱۰۶۱۴۷ |
| نیما موذن | ۴۰۱۱۰۶۵۹۹ |

---

## معرفی پروژه

پروژه **Student Task Planner** یک نرم‌افزار static frontend برای مدیریت ساده کارهای دانشجویی است. این برنامه به کاربر امکان می‌دهد taskهای مختلف را مشاهده کند، وضعیت آن‌ها را بررسی کند و از بخش‌های مختلف برنامه برای مدیریت بهتر کارهای روزانه استفاده کند.

---

## تکنولوژی‌های استفاده‌شده

| تکنولوژی | کاربرد |
|---|---|
| React | پیاده‌سازی رابط کاربری |
| Vite | ایجاد ساختار پروژه و build کردن frontend |
| CSS | طراحی ظاهر و استایل‌دهی صفحات |
| Git | کنترل نسخه و مدیریت تغییرات پروژه |
| GitHub | نگهداری remote repository و مدیریت Pull Requestها |
| GitHub Actions | اجرای فرآیند build و deploy خودکار |
| GitHub Pages | نمایش نسخه نهایی پروژه به‌صورت آنلاین |

---

## لینک اجرای پروژه

| مورد | لینک |
|---|---|
| GitHub Pages | `https://selab-an.github.io/EXP1/` |

---

## روند کلی انجام پروژه

فرآیند انجام پروژه به‌صورت مرحله‌ای انجام شد:

1. ابتدا پروژه frontend با استفاده از React و Vite ایجاد شد.
2. فایل `.gitignore` برای جلوگیری از اضافه‌شدن فایل‌های غیرضروری به مخزن ایجاد شد.
3. شاخه `dev` برای توسعه اصلی پروژه ساخته شد.
4. اعضای تیم برای انجام بخش‌های مختلف پروژه، branchهای جداگانه ایجاد کردند.
5. هر عضو روی branch مربوط به وظیفه خود کار کرد.
6. تغییرات با commitهای معنادار در Git ثبت شدند.
7. برای ادغام branchها از Pull Request استفاده شد.
8. حداقل دو conflict در فرآیند توسعه ایجاد و سپس حل شد.
9. شاخه `main` محافظت شد تا ادغام تغییرات فقط از طریق Pull Request انجام شود.
10. پس از تکمیل پروژه، تنظیمات GitHub Actions برای deploy خودکار انجام شد.
11. نسخه نهایی پروژه روی GitHub Pages مستقر شد.
12. گزارش مراحل انجام پروژه در فایل `README.md` نوشته شد.

---

## شاخه‌های استفاده‌شده در پروژه

در این پروژه برای مدیریت بهتر فرآیند توسعه، از چند branch معنادار استفاده شد.

| نام branch | هدف استفاده |
|---|---|
| `dev` | شاخه اصلی توسعه که تغییرات قبل از ورود به نسخه نهایی در آن ادغام شدند |
| `feature/layout` | پیاده‌سازی ساختار کلی صفحه، layout، header، footer و ظاهر کلی برنامه |
| `feature/tasks` | پیاده‌سازی بخش مربوط به taskها، نمایش taskها و قابلیت‌های مرتبط با آن‌ها |
| `docs/readme-report` | تکمیل گزارش پروژه، توضیح روند انجام آزمایش و پاسخ به سوالات نظری Git |

شاخه `main` به‌عنوان شاخه اصلی و پایدار پروژه استفاده شد و با اعمال محدودیت در GitHub محافظت شد. به همین دلیل تغییرات فقط از طریق Pull Request وارد این شاخه شدند.

---


## مدیریت Pull Requestها

برای ادغام تغییرات، از Pull Request استفاده شد. هدف از این کار این بود که تغییرات هر branch قبل از ورود به branch اصلی بررسی شوند و فرآیند توسعه پروژه ساختارمندتر باشد.

| Pull Request | مبدا | مقصد | هدف |
|---|---|---|---|
| PR مربوط به layout | `feature/layout` | `dev` | ادغام تغییرات مربوط به ساختار و ظاهر برنامه |
| PR مربوط به tasks | `feature/tasks` | `dev` | ادغام تغییرات مربوط به بخش taskها |
| PR مربوط به README | `docs/readme-report` | `dev` | ادغام گزارش پروژه و مستندات |
| PR نهایی | `dev` | `main` | ادغام نسخه نهایی پروژه در شاخه اصلی |

---

## محافظت از شاخه main

برای رعایت اصول توسعه تیمی، شاخه `main` پروژه محافظت شد. با این کار امکان push مستقیم روی شاخه `main` محدود شد و تغییرات فقط از طریق Pull Request قابل ادغام بودند.

این کار باعث شد تغییرات قبل از ورود به نسخه اصلی پروژه بررسی شوند و ساختار توسعه پروژه منظم‌تر باشد.

---
## گزارش conflictهای ایجادشده و نحوه رفع آن‌ها

در فرآیند توسعه پروژه، دو conflict اصلی هنگام ادغام branchها ایجاد شد. هر دو conflict به‌صورت دستی بررسی و رفع شدند.

---

### Conflict اول: ادغام `feature/tasks` با `dev`

این conflict هنگام ادغام branch `feature/tasks` در branch `dev` ایجاد شد. در این merge، چهار فایل دچار conflict شدند:

- `student-task-planner/src/config/constants.js`
- `student-task-planner/src/App.jsx`
- `student-task-planner/src/components/TaskList.jsx`
- `student-task-planner/src/App.css`

برای رفع conflictها، ابتدا فایل‌های conflictدار بررسی شدند. چون هدف اصلی branch `feature/tasks` اضافه‌کردن ساختار کامل‌تر taskها بود، در بیشتر بخش‌های conflictدار نسخه‌ی branch `feature/tasks` به‌عنوان نسخه اصلی انتخاب شد.

در فایل `constants.js` مقدار عنوان برنامه از branch `feature/tasks` انتخاب شد و مقدار نهایی برابر با `"Daily Task Manager"` قرار گرفت.

در فایل `App.jsx` نسخه‌ی branch `feature/tasks` مبنا قرار گرفت، چون شامل ساختار کامل‌تر برنامه، مدیریت state، فیلتر وضعیت taskها و کامپوننت‌های جدید بود. با این حال، بعضی بهبودهای موجود در `dev` مانند کلاس تمیزتر `footer-note` نیز حفظ شدند.

در فایل `TaskList.jsx` پیاده‌سازی branch `feature/tasks` که از کامپوننت `TaskCard` استفاده می‌کرد حفظ شد، اما قابلیت empty state و بررسی معتبر بودن آرایه‌ی taskها از branch `dev` نیز به آن اضافه شد.

در فایل `App.css` برای selectorهایی که در هر دو branch تغییر کرده بودند، اولویت با نسخه‌ی `feature/tasks` بود. اما استایل‌هایی که فقط در branch `dev` اضافه شده بودند و conflict واقعی ایجاد نمی‌کردند، مانند کلاس‌های کمکی، empty state و بهبودهای responsive، حفظ شدند.

در نهایت پس از رفع دستی conflictها، فایل‌های اصلاح‌شده stage و commit شدند.

دستورهای اصلی استفاده‌شده:

```bash
git checkout dev
git merge feature/tasks

# پس از رفع دستی conflictها در فایل‌ها
git add student-task-planner/src/config/constants.js
git add student-task-planner/src/App.jsx
git add student-task-planner/src/components/TaskList.jsx
git add student-task-planner/src/App.css

git commit -m "Merge feature/tasks into dev and resolve conflicts"
```
---
### Conflict دوم: ادغام `docs/readme-report` با `dev`

این conflict هنگام ادغام branch `docs/readme-report` با branch `dev` ایجاد شد. فایل conflictدار در این مرحله `README.md` بود.

علت conflict این بود که در branch `docs/readme-report` گزارش پروژه و مستندات README نوشته شده بود، اما در branch `dev` نیز تغییراتی روی همین فایل وجود داشت. بنابراین Git نتوانست به‌صورت خودکار تصمیم بگیرد که کدام نسخه از README باید نگه داشته شود.

برای رفع conflict، ابتدا branch `dev` داخل branch `docs/readme-report` merge شد تا conflict به‌صورت محلی ایجاد شود. سپس تصمیم گرفته شد نسخه‌ی README موجود در branch `docs/readme-report` نگه داشته شود، چون این نسخه شامل گزارش کامل‌تر پروژه بود.

از آن‌جایی که هنگام merge کردن `dev` داخل `docs/readme-report`، نسخه‌ی branch فعلی همان `ours` محسوب می‌شد، فایل `README.md` با نسخه‌ی `ours` نگه داشته شد. سپس فایل stage، commit و push شد تا Pull Request بدون conflict قابل ادغام باشد.

دستورهای اصلی استفاده‌شده:

```bash
git fetch --all --prune
git checkout docs/readme-report
git merge origin/dev

# نگه داشتن نسخه README از branch docs/readme-report
git checkout --ours README.md

git add README.md
git commit -m "Merge dev into docs/readme-report and resolve README conflict"
git push origin docs/readme-report
```
---

## استقرار پروژه با GitHub Actions و GitHub Pages

برای deploy کردن پروژه از GitHub Actions استفاده شد. در این روش، پس از ورود تغییرات نهایی به شاخه اصلی، workflow مربوط به GitHub Actions اجرا می‌شود. این workflow پروژه را build کرده و خروجی نهایی را روی GitHub Pages قرار می‌دهد.

با این روش، فرآیند استقرار پروژه به‌صورت خودکار انجام می‌شود و نیازی به deploy دستی نیست.

---

# پاسخ سوالات نظری Git

## ۱. پوشه‌ی `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشه‌ی `.git` یک پوشه‌ی مخفی است که در ریشه‌ی پروژه قرار می‌گیرد و تمام اطلاعات مربوط به مخزن Git را نگهداری می‌کند. در واقع وجود این پوشه باعث می‌شود یک پوشه‌ی معمولی به یک repository گیت تبدیل شود.

اطلاعاتی که در پوشه‌ی `.git` ذخیره می‌شود شامل موارد زیر است:

- تاریخچه‌ی commitهای پروژه
- اطلاعات branchها
- اطلاعات مربوط به remote repository
- تنظیمات داخلی Git
- وضعیت stage یا index
- اشاره‌گر HEAD
- objectهای مربوط به فایل‌ها و snapshotها

این پوشه با دستور زیر ساخته می‌شود:

`git init`

با اجرای این دستور، پوشه‌ی فعلی به یک local repository تبدیل می‌شود.

---

## ۲. منظور از atomic بودن در atomic commit و atomic pull request چیست؟

منظور از atomic بودن این است که هر تغییر فقط یک هدف مشخص و مستقل داشته باشد.

### atomic commit

atomic commit یعنی هر commit فقط شامل یک تغییر مشخص و معنادار باشد. برای مثال، اگر هدف یک commit اضافه‌کردن header است، نباید همزمان تغییرات مربوط به footer، README و تنظیمات deploy نیز در همان commit قرار بگیرد.

مزایای atomic commit:

- خواناتر شدن تاریخچه‌ی پروژه
- ساده‌تر شدن بررسی تغییرات
- راحت‌تر شدن پیدا کردن خطاها
- امکان بازگردانی یک تغییر خاص بدون اثرگذاری روی بخش‌های دیگر

### atomic pull request

atomic pull request یعنی هر Pull Request فقط مربوط به یک قابلیت، اصلاح یا هدف مشخص باشد. برای مثال، یک Pull Request فقط برای پیاده‌سازی layout و Pull Request دیگر برای پیاده‌سازی بخش taskها باشد.

مزایای atomic pull request:

- ساده‌تر شدن review
- کاهش احتمال conflict
- قابل‌فهم‌تر شدن تغییرات
- مدیریت بهتر فرآیند توسعه تیمی

---

## ۳. تفاوت دستورهای `fetch`، `pull`، `merge`، `rebase` و `cherry-pick`

### دستور `fetch`

دستور `fetch` تغییرات جدید را از remote repository دریافت می‌کند، اما آن‌ها را به‌صورت خودکار با branch فعلی ادغام نمی‌کند.

مثال:

`git fetch`

این دستور فقط اطلاعات جدید را از remote می‌گیرد و به کاربر اجازه می‌دهد قبل از ادغام، تغییرات را بررسی کند.

### دستور `pull`

دستور `pull` تغییرات remote repository را دریافت کرده و سپس آن‌ها را با branch فعلی ادغام می‌کند. در حالت معمول، `pull` ترکیبی از `fetch` و `merge` است.

مثال:

`git pull`

یعنی ابتدا تغییرات remote دریافت می‌شوند و سپس روی branch فعلی اعمال می‌شوند.

### دستور `merge`

دستور `merge` برای ادغام تغییرات یک branch با branch دیگر استفاده می‌شود.

مثال:

`git merge feature/tasks`

اگر روی branch `dev` باشیم، دستور بالا تغییرات branch `feature/tasks` را وارد `dev` می‌کند.

### دستور `rebase`

دستور `rebase` تغییرات یک branch را روی آخرین commitهای branch دیگر بازنویسی می‌کند. این دستور باعث می‌شود تاریخچه‌ی commitها خطی‌تر و مرتب‌تر دیده شود.

مثال:

`git rebase dev`

تفاوت اصلی `rebase` با `merge` این است که `merge` تاریخچه‌ی branchها را حفظ می‌کند، اما `rebase` تاریخچه را بازنویسی می‌کند.

### دستور `cherry-pick`

دستور `cherry-pick` برای انتخاب و اعمال یک commit خاص از یک branch دیگر استفاده می‌شود، بدون اینکه کل branch ادغام شود.

مثال:

`git cherry-pick commit-hash`

این دستور زمانی کاربرد دارد که فقط به یک commit مشخص از branch دیگر نیاز داشته باشیم.

---

## ۴. تفاوت دستورهای `reset`، `revert`، `restore`، `switch` و `checkout`

### دستور `reset`

دستور `reset` برای جابه‌جا کردن HEAD و تغییر وضعیت commitها یا stage استفاده می‌شود. این دستور می‌تواند تاریخچه‌ی branch را تغییر دهد.

مثال:

`git reset HEAD~1`

این دستور می‌تواند آخرین commit را از تاریخچه‌ی branch حذف کند یا تغییرات آن را به حالت قبل برگرداند. حالت‌های مختلف آن شامل `--soft`، `--mixed` و `--hard` است.

### دستور `revert`

دستور `revert` اثر یک commit را خنثی می‌کند، اما تاریخچه را حذف یا بازنویسی نمی‌کند. این دستور یک commit جدید می‌سازد که اثر commit قبلی را برعکس می‌کند.

مثال:

`git revert commit-hash`

این دستور برای پروژه‌های تیمی امن‌تر از `reset` است، چون تاریخچه‌ی مشترک repository را خراب نمی‌کند.

### دستور `restore`

دستور `restore` برای بازگرداندن تغییرات فایل‌ها استفاده می‌شود. با این دستور می‌توان فایل تغییرکرده را به آخرین نسخه‌ی commit شده برگرداند.

مثال:

`git restore file-name`

همچنین می‌توان با آن فایلی را از stage خارج کرد:

`git restore --staged file-name`

### دستور `switch`

دستور `switch` برای جابه‌جایی بین branchها استفاده می‌شود.

مثال:

`git switch dev`

برای ساختن branch جدید و ورود به آن نیز می‌توان از دستور زیر استفاده کرد:

`git switch -c feature/layout`

### دستور `checkout`

دستور `checkout` یک دستور قدیمی‌تر و چندمنظوره در Git است. از این دستور می‌توان برای جابه‌جایی بین branchها، رفتن به یک commit خاص یا بازگرداندن فایل‌ها استفاده کرد.

مثال:

`git checkout dev`

در نسخه‌های جدید Git، برای خوانایی بیشتر معمولاً از `switch` برای جابه‌جایی branch و از `restore` برای بازگرداندن فایل‌ها استفاده می‌شود.

---

## ۵. منظور از stage یا همان index چیست؟ دستور `stash` چه کاری انجام می‌دهد؟

### stage یا index

stage یا index یک ناحیه‌ی میانی بین working directory و repository است. وقتی فایلی را تغییر می‌دهیم، تغییرات ابتدا فقط در working directory قرار دارند. برای اینکه این تغییرات در commit بعدی ثبت شوند، باید آن‌ها را وارد stage کنیم.

برای وارد کردن فایل به stage از دستور زیر استفاده می‌شود:

`git add file-name`

بعد از آن، با دستور زیر تغییرات stage شده به یک commit تبدیل می‌شوند:

`git commit -m "commit message"`

بنابراین stage مشخص می‌کند که کدام تغییرات قرار است در commit بعدی ثبت شوند.

### دستور `stash`

دستور `stash` تغییرات فعلی را به‌صورت موقت ذخیره می‌کند، بدون اینکه آن‌ها را commit کنیم.

مثال:

`git stash`

این دستور زمانی کاربرد دارد که تغییراتی در پروژه داریم، اما هنوز آماده‌ی commit نیستند و می‌خواهیم موقتاً branch را تغییر دهیم یا تغییرات remote را دریافت کنیم.

برای برگرداندن تغییرات stash شده می‌توان از دستور زیر استفاده کرد:

`git stash pop`

---

## ۶. مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟

در Git، snapshot یعنی تصویری از وضعیت فایل‌های پروژه در یک لحظه‌ی مشخص. Git در هر commit وضعیت فایل‌های پروژه را ثبت می‌کند.

برخلاف برخی سیستم‌های کنترل نسخه که فقط تفاوت بین فایل‌ها را ذخیره می‌کنند، Git پروژه را به‌صورت مجموعه‌ای از snapshotها مدیریت می‌کند.

هر commit در Git یک snapshot از پروژه است. زمانی که دستور commit اجرا می‌شود، Git وضعیت فایل‌های stage شده را ذخیره می‌کند و یک نقطه‌ی مشخص در تاریخچه‌ی پروژه ایجاد می‌شود.

بنابراین ارتباط snapshot و commit این است که هر commit نشان‌دهنده‌ی یک snapshot از وضعیت پروژه در زمان ثبت آن commit است.

---

## ۷. تفاوت‌های local repository و remote repository

### local repository

local repository نسخه‌ای از مخزن پروژه است که روی سیستم شخصی توسعه‌دهنده قرار دارد. تغییرات ابتدا در local repository انجام می‌شوند و commitها نیز ابتدا به‌صورت محلی ثبت می‌شوند.

مثال:

`git commit -m "feat: add task section"`

در local repository می‌توان بدون نیاز به اینترنت تغییرات را انجام داد، branch ساخت و commit ثبت کرد.

### remote repository

remote repository نسخه‌ای از مخزن پروژه است که روی یک سرور مانند GitHub قرار دارد. این repository برای اشتراک‌گذاری تغییرات بین اعضای تیم استفاده می‌شود.

برای ارسال تغییرات local به remote از دستور زیر استفاده می‌شود:

`git push`

برای دریافت تغییرات remote از دستور زیر استفاده می‌شود:

`git pull`

### جمع‌بندی تفاوت local و remote

| نوع repository | محل قرارگیری | کاربرد |
|---|---|---|
| local repository | روی سیستم شخصی توسعه‌دهنده | انجام تغییرات، ساخت branch، commit و تست محلی |
| remote repository | روی GitHub یا سرور مشابه | اشتراک‌گذاری تغییرات، همکاری تیمی و مدیریت Pull Requestها |
