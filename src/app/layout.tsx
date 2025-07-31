# Create a fixed layout.tsx file without direct interface typing
layout_tsx_content_v2 = """\
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
"""

# Overwrite layout.tsx with the corrected version
layout_file_path_v2 = "/mnt/data/fixed_project/src/app/[locale]/layout.tsx"
with open(layout_file_path_v2, "w") as f:
    f.write(layout_tsx_content_v2)

# Create a new zip file with updated layout.tsx
zip_path_v2 = "/mnt/data/fixed_project_final_layout.zip"
with zipfile.ZipFile(zip_path_v2, 'w') as zipf:
    for foldername, subfolders, filenames in os.walk("/mnt/data/fixed_project"):
        for filename in filenames:
            file_path = os.path.join(foldername, filename)
            arcname = os.path.relpath(file_path, "/mnt/data/fixed_project")
            zipf.write(file_path, arcname)

zip_path_v2
