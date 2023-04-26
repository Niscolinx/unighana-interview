import { FC, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface Input {
    name: string
    type: string
    register?: any
    formErrors: any
    disabled?: boolean
    value?: any
    tag?: string
    options: any
    required?: boolean
    pre?: string
    minLength?: number
    fullWidth: boolean
}

const Input: FC<Partial<Input> & { label: string }> = ({
    label,
    name,
    type = 'text',
    register,
    pre,
    fullWidth,
    disabled,
    tag,
    required = true,
    formErrors,
    value,
    minLength = 3,
}) => {
    const validationOptions = {
        required,
        minLength,
        pattern:
            type === 'email'
                ? /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                : '',
    }

    const [eyeIcon, setEyeIcon] = useState(false)
    const toggleEyeIcon = () => setEyeIcon(!eyeIcon)

    return (
        <div
            className={`w-full grid gap-2 self-baseline ${
                fullWidth && 'col-span-full'
            }`}
        >
            <>
                <label htmlFor={label} className='font-medium capitalize'>
                    {name ?? label.replaceAll('_', ' ')}
                </label>

                {type === 'password' ? (
                    <div className='relative flex items-center'>
                        <input
                            type={eyeIcon ? 'text' : 'password'}
                            className={`border pr-12 border-none px-4 py-3 outline-none rounded-lg w-full disabled:opacity-50 disabled:cursor-not-allowed ${
                                formErrors &&
                                formErrors[label] &&
                                'border-red-500 '
                            }`}
                            name='password'
                            id={label}
                            disabled={disabled}
                            value={value}
                            {...(register &&
                                register(label, validationOptions))}
                        />
                        <span className='absolute right-2 cursor-pointer'>
                            {eyeIcon ? (
                                <AiOutlineEyeInvisible
                                    onClick={toggleEyeIcon}
                                />
                            ) : (
                                <AiOutlineEye onClick={toggleEyeIcon} />
                            )}
                        </span>
                    </div>
                ) : (
                    <div>
                        {type === 'textarea' ? (
                            <textarea
                                id={label}
                                rows={4}
                                maxLength={30}
                                disabled={disabled}
                                type={type}
                                value={value}
                                {...(register &&
                                    register(label, validationOptions))}
                                className={` w-full border-none outline-none disabled:opacity-50 disabled:cursor-not-allowed p-4 pl-0 ${
                                    formErrors &&
                                    formErrors[label] &&
                                    'border-red-500 '
                                }`}
                            />
                        ) : (
                            <input
                                id={label}
                                disabled={disabled}
                                type={type}
                                value={value}
                                {...(register &&
                                    register(label, validationOptions))}
                                className={` border w-full rounded-lg border-none outline-none disabled:opacity-50 disabled:cursor-not-allowed px-4 py-3 ${
                                    formErrors &&
                                    formErrors[label] &&
                                    'border-red-500 '
                                }`}
                                min={
                                    type === 'date'
                                        ? label.indexOf('dob') !== 0 &&
                                          new Date().toISOString().split('T')[0]
                                        : 0
                                }
                            />
                        )}
                    </div>
                )}
            </>

            {!formErrors[label] && pre && (
                <p className=' text-gray-400'>{pre}</p>
            )}
            {formErrors && formErrors[label] && (
                <p className=' text-red-500'>
                    {formErrors[label].type === 'required' ? (
                        <span>Field cannot be empty</span>
                    ) : (
                        <span>Invalid {label}</span>
                    )}
                </p>
            )}
        </div>
    )
}

export default Input
